
const path = require('path')
const fs = require('fs')
const utils = require('../../build/utils')

let modules = fs.readdirSync(path.join(utils.resolve('config'), 'cdn.conf'))
modules = modules.map(item => item.replace(/\.js$/, ''))
modules = modules.filter(item => item !== 'index')

const requirePackage = {}
for (let i = 0; i < modules.length; i++) {
  requirePackage[modules[i]] = require('./' + modules[i])
}
// console.log(modules, requirePackage.test)
module.exports = requirePackage
