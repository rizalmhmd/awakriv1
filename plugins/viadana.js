let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(image)).buffer(), `
╭─❒ 〘 PEMBAYARAN VIA DANA 〙
╠ Ke nomer ini
║➥ 081360482998
╰❒
╭─❒〘 FITUR BOT 〙 ═
╠➥ *FITUR DOWNLOADER 600++
║     YouTube, Twitter, 
║     Tiktok, Instagram, dll.*
║    *FITUR STIKER*
╠➥ *FITUR ADMIN*
║    *KICK ORANG*
║    *JADIIN ADMIN*
╠➥ *FITUR ISLAM*
║   *QURAN*
║   *CEK JADWAL SHALAT*
╠➥ *INTERNET*
║   *BRAINLY*
║   *GOOGLE*
╠➥ *DAN 200 LEBIH*
║   *FITUR LAINNYA*
╰─❒〘 ${namabot} 〙 ═
`.trim(), '𝘈𝘸𝘢㉿𝘳𝘪 𝘖𝘧𝘤', 'Menu', '#menu', 'Rules', '#rules', m)
}
}
handler.help = ['viadana']
handler.tags = ['info']
handler.command = /^viadana$/i

module.exports = handler
