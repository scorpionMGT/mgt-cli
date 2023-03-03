// lib/create.js

const path = require('path')
const fs = require('fs-extra')

const run = async () => {
  const inquirer = await import('inquirer')
  inquirer.default.prompt([
    {
      type: 'list', // type： input, number, confirm, list, checkbox ... 
      name: 'template', // key 名
      choices: ['vue2template', 'vue2.7template', 'vue3template'],
      message: '选择template类型', // 提示信息
      default: 'vue2template' // 默认值
    }
  ]).then(answers => {
    const cwd  = process.cwd()
    const targetAir  = path.join(cwd, answers.template)
    console.log(cwd, targetAir, 'targetAir')

  })
}

module.exports = async function (options) {
  // 当前命令行选择的目录
  // const cwd  = process.cwd()
  run()
}