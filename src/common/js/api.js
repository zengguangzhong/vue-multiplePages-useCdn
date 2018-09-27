/*
 * @Author: Jerry.chenshisong
 * @Date: 2018-09-27 15:08:57
 * @Last Modified by: Jerry.chenshisong
 * @Last Modified time: 2018-09-27 15:42:43
 * api接口
 */

// import axios from './request'

export const getUserInfo = params => {
  // return axios.post(api, params)
	return Promise.resolve({
		id: 'bcsugjnbuiv1hvt3omcg',
		avatar: 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83epLF0kzHIEeoTia4icafayic9S1UwwRjh4O0b2W6pTXrUpnd7da31FEpIVvupkcS6tm6D71qcpLuxpTw/132'
	})
}

// https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIH2ichgBK4uMK4QpicianJjpd0DLtnEhPZq38iaAZkC8d2RibzjjLc9HY58ic8ym8jictyEtqfRcWoBmL6Q/132
// https://wx.qlogo.cn/mmopen/vi_32/q021alznpB5fzHAVBkqtz2a2e7WTx5NicsTq1VqA4ACPBpayec0G7kjsQMn6y0bECSwKOmibwbXvfTUXegnBdAibw/132
// https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83erEf6GAFr8ntWtI9c2XPOFXS09q8Seh0ImhK6kz32eoyrKm8ZJIPEbjIDic6iaoMsps7fAibH1SOhrgQ/132