const path = require('path');
const fs = require('fs');
const utils = require('./utils');
const currentPage = require('../config/app.config').currentPage

let buildEntries = {};

/*获取所有模块的文件夹名*/
const modules = fs.readdirSync(path.join(utils.resolve('src'),currentPage));

for (let moduleName of modules) {
  buildEntries[moduleName] = path.join(utils.resolve('src'),currentPage,moduleName,'main.js');
}

module.exports = buildEntries;
