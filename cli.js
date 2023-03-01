#! /usr/bin/env node

// #! 符号的名称叫 Shebang，用于指定脚本的解释程序
// Node CLI 应用入口文件必须要有这样的文件头
// 如果是Linux 或者 macOS 系统下还需要修改此文件的读写权限为 755
// 具体就是通过 chmod 755 cli.js 实现修改

// const program = require('commander')

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

const program = require('commander')
const figlet = require('figlet')

program
  // 定义命令和参数
  .command('create <app-name>')
  .description('create a new project')
  // -f or --force 为强制创建，如果创建的目录存在则直接覆盖
  .option('-f, --force', 'overwrite target directory if it exist')
  .action((name, options) => {
     // 在 create.js 中执行创建任务
     require('./lib/create.js')(name, options)
  })
  
program
   // 配置版本号信息
  .version(`v${require('./package.json').version}`)
  .usage('<command> [option]')
  
// 解析用户执行命令传入参数
program.parse(process.argv);

figlet('mgt-cli!!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});