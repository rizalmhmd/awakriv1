let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
┌─── 〔 𝗕 𝗘 𝗟 𝗜  𝗕 𝗢 𝗧 〕 ───
❍ Allomypren, Nah ini Harga beli nya👋
╔═══════════════════
║╭─❉ 「 𝗗𝗢𝗡𝗔𝗦𝗜 𝗢𝗪𝗡𝗘𝗥 」 ❉───
║│➸ *DANA* : 081360482998
║│➸ *PULSA*: 081360482998
║│➸ *GOPAY*: 081360482998
║╰──────────────────
╠══════════════════
║╭──❉ 「 𝗟𝗜𝗦𝗧 𝗛𝗔𝗥𝗚𝗔 」 ❉─────
║│➸ 𝗧𝗔𝗡𝗬𝗔𝗞𝗔𝗡 𝗞𝗘 𝗢𝗪𝗡𝗘𝗥𝗡𝗬𝗔
║│➸ 𝙊𝙒𝙉𝙀𝙍 wa.me/62895327934887
║╰──────────────────    
╠══════════════════
║   𝗧𝗲𝗿𝘁𝗮𝗿𝗶𝗸 𝘂𝗻𝘁𝘂𝗸 𝗯𝗲𝗹𝗶 𝗯𝗼𝘁
║   𝗞𝗲𝘁𝘂𝗸 𝘁𝗼𝗺𝗯𝗼𝗹 𝗱𝗶𝗯𝗮𝘄𝗮𝗵
╠══════════════════
║╭─────────────────
║│ 𝗧𝗲𝗿𝘁𝗮𝗿𝗶𝗸 𝘂𝗻𝘁𝘂𝗸 𝗯𝗲𝗹𝗶 𝗯𝗼𝘁
║│ 𝗞𝗲𝘁𝘂𝗸 𝘁𝗼𝗺𝗯𝗼𝗹 𝗱𝗶𝗯𝗮𝘄𝗮𝗵
║╰──────────────────
╰═══〘 ${namabot} 〙 ══
`.trim()
    const button = {
        buttonText: 'klik Disini',
        description: kamisato,
        sections:  [{title: "Pilih Langsung Chat Owner Tanpa Basa Basi", rows: [
        {title: 'OᗯᑎEᖇ', description: "Chat owner nya jika ada perlu.", rowId:".owner"},
        {title: 'ᖇᑌᒪES', description: "PERATURAN BOT", rowId:".rules"},
        {title: 'MENU UTAMA', description: "Kembali ke menu utama.", rowId:".menu"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.command = /^beli(bot)$/i

module.exports = handler
