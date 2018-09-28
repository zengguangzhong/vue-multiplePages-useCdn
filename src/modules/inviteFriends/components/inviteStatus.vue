<template>
  <div>
		<div>
			<asistMember :avatarList="basicInfo.helpMeList" :need="basicInfo.needFriendsNumber" :status="status" v-if="!/noPeopleAndEnd|noPeopleAndStart/.test(status)"></asistMember>
			<countDown :endTime="basicInfo.endTime" v-if="status==='hasPeopleButNotSuccess'"></countDown>
		</div>
		<div v-if="status==='hasPeopleAndEnd'">
			<p class="m-t">
				<customBtn :opts="btn[status]"></customBtn>
			</p>
		</div>
		<div v-if="status==='hasPeopleButNotSuccess'">
			<p class="m-t">
				<customBtn :opts="btn[status].continue"></customBtn>
			</p>
			<p class="m-t">
				<customBtn :opts="btn[status].direct"></customBtn>
			</p>
		</div>
		<div v-if="status==='noPeopleAndStart'">
			<p class="m-t-l text-center">
        <img src="../../../common/images/invite_btn.png"  alt="">
    	</p>
    <p class="or f14 m-t-xs text-center">或</p>
    <p class="m-t">
      <customBtn :opts="directBtnOpt"></customBtn>
    </p>
		</div>
  </div>
</template>

<script>
import util from '../../../common/js/utils.js'
import { getActiveInfo } from '../../../common/js/api.js'
import selfData from '../data.js'
export default {
  name: 'inviteStatus',
  props: {
    propName: {
      type: Number,
      default: 2
    }
  },
  data() {
    return {
      basicInfo: {},
      status: '',
      btn: selfData.btn
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      this.basicInfo = await getActiveInfo()
      util.setStore(this.basicInfo)
      this.computedStatus()
    },
    // 助力状态
    // hasPeopleAndEnd:有好友助力，但是已结束
    // noPeopleAndEnd:没有好友助力并且结束
    // noPeopleAndStart:没有好友助力等待好友助力
    // success:成功了
    // hasPeopleButNotSuccess:有朋友助力但是没有成功
    computedStatus() {
      if (new Date() > new Date(this.basicInfo.endTime)) {
        this.status =
          this.basicInfo.helpMeList.length !== 0
            ? 'hasPeopleAndEnd'
            : 'noPeopleAndEnd'
      } else {
        if (this.basicInfo.helpMeList.length === 0) {
          this.status = 'noPeopleAndStart'
        } else {
          this.status =
            this.basicInfo.helpMeList.length ===
            this.basicInfo.needFriendsNumber
              ? 'success'
              : 'hasPeopleButNotSuccess'
        }
      }
    }
  }
}
</script>

<style scoped>
</style>
