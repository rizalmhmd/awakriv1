let handler  = async (m, { conn, usedPrefix: _p }) => {
let fetch = require('node-fetch')
let str = `
* Tutorial Buat Bot WA:*

 *Ketik di *[TERMUX]*
1) $ apt update
2) $ apt upgrade
3) $ pkg install ffmpeg
4) $ pkg install imagemagick
5) $ pkg install nodejs

 *Untuk Sc nya cari sendiri, atau beli sc ku*
6) $ termux-setup-storage
7) $ cd storage/downloads/(nama file yg kmu rename)


 *Git*
1) $ pkg install git
2) $ pkg install ffmpeg
3) $ pkg install imagemagick
4) $ pkg install nodejs

 *Script*
5) $ git clone (link sc github)
6) $ cd (nama sc)

  *Penginstal :*
$ npm start
atau
$ npm i pm2 && pm2 start (sesuaikan sama sc kalian)

[  Note : Tanda $ Ga Perlu Di Ketik ]
`.trim()
conn.send2ButtonLoc(m.chat,await (await fetch(image)).buffer(),str, watermark, 'Script', '.sc', 'Menu', '.menu', m )
}
handler.help = ['carabuatbot']
handler.tags = ['main']
handler.command = /^(cbb|carabuatbot)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

let wm = global.botwm
