/*
 * @Author: Jerry.chenshisong
 * @Date: 2018-09-27 15:06:58
 * @Last Modified by: Jerry.chenshisong
 * @Last Modified time: 2018-10-24 15:40:59
 * 多页面配置及打包上传配置
 */

const currentProject = 'test'
const use = 'ali' // ali 或 qiniu

const config = {
  currentPage: `pages/${currentProject}`,
  use,
  qiNiuCdn: {
    host: 'http://pfo0kk2j7.bkt.clouddn.com/',
    bucket: 'hupo-boost-free',
    ak: 'd5tED2TwJGtf3gDprAVaau65giIhZGrBqOWW3OV6',
    sk: 'LmnpMQ1Mg5G0Sdpjc3ZcKxOu_VbJccg3lBnaWV9u',
    zone: 'Zone_z2',
    prefix: '/cdn/test/'
  },
  aLiOss: {
    host: 'https://hpvip.oss-cn-hangzhou.aliyuncs.com',
    accessKeyId: 'LTAIop8DUZrSMEMn',
    accessKeySecret: 'Yi8BUqh44mEsqZNGi9x77942FLNOUM',
    bucket: 'hpvip',
    region: 'oss-cn-hangzhou',
    prefix: '/cdn/test/'
  },
  cdnLink: {
    vue: 'https://cdn.bootcss.com/vue/2.3.4/vue.min.js',
    vueRouter: 'https://cdn.bootcss.com/vue-router/2.3.1/vue-router.min.js'
  }
}

config.uploadPath = use === 'ali' ? config.aLiOss : config.qiNiuCdn

module.exports = config
