/*
 * @Author: Jerry.chenshisong
 * @Date: 2018-09-27 15:06:58
 * @Last Modified by: Jerry.chenshisong
 * @Last Modified time: 2018-10-23 17:01:56
 * 多页面配置及打包上传配置
 */

const currentProject = 'test'
const use = 'qiniu' // ali 或 qiniu

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
    host: 'https://css-test-cdn.oss-cn-beijing.aliyuncs.com',
    accessKeyId: 'LTAIvroOKv2MKWUF',
    accessKeySecret: 'Yi1Nmxn0nwKw8RqUdOWMIpYLX1tfMH',
    bucket: 'css-test-cdn',
    region: 'oss-cn-beijing',
    prefix: '/cdn/test/'
  }
}

config.uploadPath = use === 'ali' ? config.aLiOss : config.qiNiuCdn

module.exports = config
