<template>
  <div class="app">
    <!-- 邀请好友助力 -->
    <img lowsrc="../../common/images/index_banner.png" src="../../common/images/banner.png" class="w-full" alt="">
    <inviteStatus></inviteStatus>
    <countDown endTime="2018.9.28"></countDown>
    <eventDescription :rules="selfData.activeRules"></eventDescription>
  </div>
</template>

<script>
  import selfData from './data.js'
  import inviteStatus from './components/inviteStatus.vue'
  export default {
  	components: {inviteStatus},
  	data() {
  		return {
  			selfData,
  			fdsf: 'fsd'
  		}
  	}
  }
</script>

<style></style>
