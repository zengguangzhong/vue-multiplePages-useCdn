const path = require('path')
const fs = require('fs')

// 设置默认活动页的路径，优先级：命令中参数 > currentPage配置 ，如果都不存在，则打包pages中第一个活动
const currentPage = 'test'

/* 获取所有模块的文件夹名*/
const modules = fs.readdirSync(path.join(__dirname, '..', 'src/pages'))
const argvPath = process.argv.splice(2)[0]
let realPath
if (modules.indexOf(argvPath) !== -1) {
  realPath = argvPath
} else {
  if (modules.indexOf(currentPage) !== -1) {
    realPath = currentPage
  } else {
    realPath = modules[0]
  }
}

console.log(`您正在 ${process.env.NODE_ENV === 'development' ? '开发/上传' : '打包/上传'} ${realPath} 活动页的页面`)

module.exports = {
  currentPage: `pages/${realPath}`,
  // currentPage: `pages/${currentPage}`,
  cdn: {
    host: 'http://pfo0kk2j7.bkt.clouddn.com/',
    bucket: 'hupo-boost-free',
    ak: 'd5tED2TwJGtf3gDprAVaau65giIhZGrBqOWW3OV6',
    sk: 'LmnpMQ1Mg5G0Sdpjc3ZcKxOu_VbJccg3lBnaWV9u'
  },
  cdnConfig: {
    vue: 'https://cdnjs.cloudflare.com/ajax/libs/vue/2.3.4/vue.min.js'
  }
}
