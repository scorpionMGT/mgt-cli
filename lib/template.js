// lib/create.js

const path = require('path')
const fs = require('fs-extra')
const stat = fs.stat

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
    const templateAir = path.resolve(__dirname, `../template/${answers.template}`)
    fs.readdir(templateAir, (err, paths) => {
      if (err) {
        throw err
      }
      paths.forEach(path => {
        const _src = templateAir + '/' + path;
        const _dst = cwd + '/' + path;
        let readable
        let writable
        stat(_src, (err, st) => {
          if (err) {
            throw err
          }
          if (st.isFile()) {
            readable = fs.createReadStream(_src); // 创建读取流
            writable = fs.createWriteStream(_dst); // 创建写入流
            readable.pipe(writable)
          } else if (st.isDirectory()) {
            console.log('st', st)
          }
        })
      })
    })
  })
}

module.exports = async function (options) {
  // 当前命令行选择的目录
  // const cwd  = process.cwd()
  run()
}