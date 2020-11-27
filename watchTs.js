const exec = require('child_process').exec
const watch = require('node-watch')

watch(['./miniprogram'], { recursive: true }, function (evt, name) {
  if (name.split('.').pop() === 'ts') {
    console.log('监听到TypeScript文件改动，重新编译中...')
    exec('npm run compile')
  }
})

console.log('云智TypeScript自动编译脚本已成功运行...')
