// lib/create.js

const path = require('path')
const fs = require('fs-extra')

const run = async () => {
  const inquirer = await import('inquirer')
  inquirer.default.prompt([
    {
      type: 'input', // type： input, number, confirm, list, checkbox ... 
      name: 'name', // key 名
      message: 'Your name', // 提示信息
      default: 'mgt-cli' // 默认值
    }
  ]).then(answers => {
    // 打印互用输入结果
    console.log(answers)
  })
}

module.exports = async function (options) {
  // 当前命令行选择的目录
  // const cwd  = process.cwd()
  run()
}