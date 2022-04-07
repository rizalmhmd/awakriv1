let moment = require('moment-timezone')
let fs = require('fs')
let handler = async (m, { conn, command, text }) => {
let img = './src/RadBot.png'
let user = global.db.data.users[m.sender]
conn.send3Button(m.chat, `Hallo👋, ${conn.getName(m.sender)}\n\nBot 𝘈𝘸𝘢㉿𝘳𝘪 𝘖𝘧𝘤 disini, siap membantu anda `, '𝘈𝘸𝘢㉿𝘳𝘪 𝘖𝘧𝘤', 'Menu', '#Menu', 'Owner', '.owner', 'Sewa', '.sewabot', { key: { fromMe: false, remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { message: `${ucapan()}\n👤 ${conn.getName(m.sender)}`, itemCount: 999, thumbnail: fs.readFileSync('./src/awakri.jpg')
}}})
}
handler.customPrefix = /^(hy|hay|Hallo|halo|Halo|hallo|hi|helo|hai|hi|Hai|Helo|Hello)$/i
handler.command = new RegExp

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "💬 *Turu Ngab*"
    if (time >= 4) {
        res = "💬 *Pagi Ngab*"
    }
    if (time > 10) {
        res = "💬 *Siang Ngab*"
    }
    if (time >= 15) {
        res = "💬 *Sore Ngab*"
    }
    if (time >= 18) {
        res = "💬 *Malam Ngab*"
    }
    return res
}
