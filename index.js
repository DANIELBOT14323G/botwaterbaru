console.log('Starting  Bot...')
let { spawn } = require('child_process')
let path = require('path')
let fs = require('fs')
let package = require('./package.json')
const CFonts  = require('cfonts')
CFonts.say('halo owner\nBOT', {
  font: 'chrome',
  align: 'center',
  gradient: ['red', 'magenta']
})
CFonts.say(`DI BUAT OLEH owner bot`, {
  font: 'console',
  align: 'center',
  gradient: ['red', 'magenta']
})
function start(file) {
  let args = [path.join(file), ...process.argv.slice(2)]
  CFonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
  })
  let p = spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  })
  .on('message', data => {
    console.log('[RECEIVED]', data)
    switch (data) {
      case 'reset':
        p.kill()
        start.apply(this, arguments)
        break
      case 'uptime':
        p.send(process.uptime())
        break
   
        // listening on Incoming Call
        daniel.onIncomingCall(( async (call) => {
            await daniel.sendText(call.remoteJid, 'Maaf, saya tidak bisa menerima panggilan. nelfon = block!.\nJika ingin membuka block harap chat Owner!')
            .then(() => daniel.contactBlock(call.peerJid))
        }))    
    }
  })
  .on('error', e => {
    console.error(e)
    fs.watchFile(args[0], () => {
      start()
      fs.unwatchFile(args[0])
    })
  })
  // console.log(p)
}
start('danielgoblok.js')
