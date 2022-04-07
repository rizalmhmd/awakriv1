let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
╭═══ 〔 𝐋𝐈𝐒𝐓 𝐁𝐄𝐑𝐋𝐀𝐍𝐆𝐆𝐀𝐍𝐀𝐍 〕 ════
├⬡ 𝟏 ᗰIᑎGGᑌ
├⬡ 𝟏 ᗷᑌᒪᗩᑎ
├⬡ 𝟑 ᗷᑌᒪᗩᑎ
├⬡ ᑭEᖇᗰᗩᑎEᑎ
├⬡ ᑭᖇEᗰIᑌᗰ
├⬡ ᒍᗩᗪI ᗷOT
├⬡ ᒍᗩᗪI OᗯᑎEᖇ
└═══════════════
𝗦𝗶𝗹𝗮𝗵𝗸𝗮𝗻 𝗸𝗹𝗶𝗸 𝗽𝗮𝗱𝗮 "𝗟𝗶𝘀𝘁 𝗛𝗮𝗿𝗴𝗮" 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗹𝗶𝗵𝗮𝘁 𝗹𝗶𝘀𝘁.
╭═══════════════════════
║╭──❉ 〔 𝐕𝐈𝐀 𝐌𝐎𝐁𝐈𝐋𝐄 〕 ❉──────
║│➸ *DANA* : 081360482998
║│➸ *PULSA*: 081360482998
║│➸ *OVO*   : 081360482998
║╰─────────────────────
╰═══════════════════════
`.trim()
    const button = {
        buttonText: 'List Harga',
        description: kamisato,
        sections:  [{title: "Pilih Langsung Chat Owner Tanpa Basa Basi", rows: [
        {title: '𝟏 ᗰIᑎGGᑌ', description: "Rp5.000\nSewa bot selama 1 Minggu.", rowId:".owner"},
        {title: '𝟏 ᗷᑌᒪᗩᑎ', description: "Rp10.000\nSewa bot selama 3 bulan.", rowId:".owner"},
        {title: '𝟑 ᗷᑌᒪᗩᑎ', description: "Rp15.000\nSewa bot selama 5 bulan.", rowId:".owner"},
        {title: 'ᑭEᖇᗰᗩᑎEᑎ', description: "Rp25.000\ntanpa batasan waktu.", rowId:".owner"},
        {title: 'ᑭᖇEᗰIᑌᗰ', description: "Rp30.000\ntanpa batasan waktu.", rowId:".owner"},
        {title: 'ᒍᗩᗪI ᗷOT', description: "Rp50.000\nbatasan waktu tertentu.", rowId:".owner"},   
        {title: 'ᒍᗩᗪI OᗯᑎEᖇ', description: "Rp40.000\nbatasan waktu tertentu.", rowId:".owner"},
        {title: 'OᗯᑎEᖇ', description: "Chat owner nya jika ada perlu.", rowId:".owner"},
        {title: 'GROUP BOT', description: "INGIN CARI BOT", rowId:".gcbot"},
        {title: 'ᖇᑌᒪES', description: "PERATURAN BOT", rowId:".rules"},
        {title: 'MENU UTAMA', description: "Chat owner nya jika ada perlu.", rowId:".menu"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^(sewa)$/i
handler.help = ['sewa']
module.exports = handler
//R-Txzy
