let moment = require('moment-timezone')
let fetch = require ('node-fetch')
let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    if (db.data.settings.groupOnly) return
    let user = global.db.data.users[m.sender]
    let name = conn.user.name
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
    await conn.send3ButtonLoc(m.chat, await(await fetch(image)).buffer(), `
${ucapan()}

𝘚𝘈𝘠𝘈 𝘈𝘋𝘈𝘓𝘈𝘏 𝘚𝘈𝘓𝘈𝘏 𝘚𝘈𝘛𝘜 𝘉𝘖𝘛 𝘞𝘏𝘈𝘛𝘚𝘈𝘗𝘗
𝘋𝘐 𝘏𝘈𝘙𝘈𝘗𝘒𝘈𝘕 𝘑𝘈𝘕𝘎𝘈𝘕 𝘊𝘈𝘓𝘓 𝘖𝘙 𝘝𝘊 𝘉𝘖𝘛
𝘋𝘐 𝘏𝘈𝘙𝘈𝘗𝘒𝘈𝘕 𝘜𝘕𝘛𝘜𝘒 𝘋𝘖𝘕𝘈𝘚𝘐
${user.banned ? 'kamu dibanned' : `𝘑𝘐𝘒𝘈 𝘐𝘕𝘎𝘐𝘕 𝘉𝘖𝘛 𝘖𝘕 24𝘑𝘈𝘔 `}
`.trim(), watermark, user.banned ? 'Pemilik Bot' : 'Menu', user.banned ? ',owner' : '.menu', 'Panduan penggunaan', '.tutorbot', 'Verify', '.daftar undefined.16', m)
    user.pc = new Date * 1
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "💬 Turu Ngab"
    if (time >= 4) {
        res = "💬 Pagi Ngab"
    }
    if (time > 10) {
        res = "💬 Siang Ngab"
    }
    if (time >= 15) {
        res = "💬 Sore Ngab"
    }
    if (time >= 18) {
        res = "💬 Malam Ngab"
    }
    return res
}
