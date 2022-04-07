let levelling = require('../lib/levelling')
let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let moment = require('moment-timezone')
let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  await m.reply('⏳Sedang diproses...')
    let kontol = `
╭─❒ 〘 𝗕 𝗢 𝗧   𝗜 𝗡 𝗙 𝗢 〙 
║│➸ *Creator* :  @${global.owner[0]} 
║│➸ *Hostname* : ${namabot}
║│➸ *Versi* : 1.5.0
║│➸ *Issue:* ${package.bugs.url}
║│➸ *Prefix:* ' ${usedPrefix} '
║│➸ *Menu:* ${usedPrefix}menu
║│➸ *Ping:* ${neww - old} *ms*
║│➸ *Total user:* ${totalreg} *user*
║│➸ *Uptime:* ${uptime}
╰❒

╭═❒〘 𝗦𝗨𝗣𝗣𝗢𝗥𝗧 𝗠𝗬 𝗚𝗥𝗢𝗨𝗣 〙
║╭──❉〔 𝐆𝐑𝐎𝐔𝐏 ¹𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋 〕
║│➸ tinyurl.com/KRIZYNOFC
║╰───────────────
║╭──❉〔 𝐆𝐑𝐎𝐔𝐏 ²𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋 〕
║│➸ tinyurl.com/KRIZYNWANGSAFBOTz
║╰───────────────
╰❒  

╭─❒ 〘 𝗗 𝗢 𝗡 𝗔 𝗦 𝗜 〙 
├ DANA [6281360482998]
├ PULSA [6281360482998]
╰❒ 

╭─❒〘 𝗣 𝗜 𝗥 𝗔 𝗖 𝗬   𝗕 𝗢 𝗧 〙 
║│➸ *KAMI TIDAK BERTANGGUNG*
║│➸ *JAWAB ATAS PENYALAH*
║│➸ *GUNAAN BOT*
║│➸ *KAMI TIDAK BERTANGGUNG*
║│➸ *JAWAB ATAS KEBOCORAN DATA*
║│➸ *PRIBADI ANDA*
║│➸ *KAMI AKAN MENYIMPAN DATA*
║│➸ *SEPERTI NOMER TELEPON*
║│➸ *ANDA DI DATABASE KAMI*
╰❒
`.trim()
  const button = {
        buttonText: 'Klik Disini',
        description: kontol,
        sections:  [{title: "Silahkan di pilih gausah pilih yang gaada", rows: [
        {title: 'Menu Utama', description: "Kembali ke Menu Utama", rowId:".?"},
        {title: 'Sewa Bot', description: "Sewa bot dengan memasukkan bot ke grup kamu", rowId:".sewa"},
        {title: 'Owner', description: "CHAT BAGI YANG KEPENTINGAN", rowId:".owner"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.help = ['main']
handler.tags = ['infobot']
handler.command = handler.command = /^(infobot)$/i
module.exports = handler
