// lib/create.js

const path = require('path')
const fs = require('fs-extra')

module.exports = async function (name, options) {
  // 执行创建命令

  // 当前命令行选择的目录
  const cwd  = process.cwd();
  // 需要创建的目录地址
  const targetAir  = path.join(cwd, name)
  console.log('cwd', cwd, targetAir)
  // 目录是否已经存在？
  if (fs.existsSync(targetAir)) {

    // 是否为强制创建？
    if (options.force) {
      await fs.remove(targetAir)
    } else {
      // TODO：询问用户是否确定要覆盖
    }
  }
}


// const run = async () => {
//   const inquirer = await import('inquirer')
//   // 定义命令和参数
//   program.default
//     .command('create <app-name>')
//     .description('create a new project')
//     // -f or --force 为强制创建，如果创建的目录存在则直接覆盖
//     .option('-f, --force', 'overwrite target directory if it exist')
//     .action((name, options) => {
//       // 打印执行结果
//       console.log('name:',name,'options:',options)
//     })
  
//   // 配置版本号信息
//   program
//     .version(`v${require('../package.json').version}`)
//     .usage('<command> [option]')
  
//   // 解析用户执行命令传入参数
//   program.parse(process.argv);

//   inquirer.default.prompt([
//     {
//       type: 'input', // type： input, number, confirm, list, checkbox ... 
//       name: 'name', // key 名
//       message: 'Your name', // 提示信息
//       default: 'mgt-cli' // 默认值
//     }
//   ]).then(answers => {
//     // 打印互用输入结果
//     console.log(answers)
//   })
// }

// run()