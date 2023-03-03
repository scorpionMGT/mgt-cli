#! /usr/bin/env node

// #! 符号的名称叫 Shebang，用于指定脚本的解释程序
// Node CLI 应用入口文件必须要有这样的文件头
// 如果是Linux 或者 macOS 系统下还需要修改此文件的读写权限为 755
// 具体就是通过 chmod 755 cli.js 实现修改

const program = require('commander')
const figlet = require('figlet')

const run = async () => {
  const chalk = await import('chalk')
  program
    // 定义命令和参数
    .command('template')
    .description('create a new template')
    // -f or --force 为强制创建，如果创建的目录存在则直接覆盖
    .option('-f, --force', 'overwrite target directory if it exist')
    .action((option) => {
      // 在 template.js 中执行创建任务
      require('./lib/template.js')(option)
    })

  // 配置 config 命令
  program
    .command('config [value]')
    .description('inspect and modify the config')
    .option('-g, --get <path>', 'get value from option')
    .option('-s, --set <path> <value>')
    .option('-d, --delete <path>', 'delete option from config')
    .action((value, options) => {
      console.log(value, options)
    })

  // 配置 ui 命令
  program
    .command('ui')
    .description('start add open roc-cli ui')
    .option('-p, --port <port>', 'Port used for the UI Server')
    .action((option) => {
      console.log(option)
    })

  program
    // 配置版本号信息
    .version(`v${require('./package.json').version}`)
    .usage('<command> [option]')

  program
    // 监听 --help 执行
    .on('--help', () => {
      // 新增说明信息
      console.log(`\r\nRun ${chalk.default.blue(`mgt-cli <command> --help`)} for detailed usage of given command\r\n`)
    })


  figlet.text('mgt-cli',  (err, data) => {
      if (err) {
          console.log('Something went wrong...')
          console.dir(err)
          return
      }
      console.log(data);
      // 解析用户执行命令传入参数
      program.parse(process.argv)
  })

}

run()