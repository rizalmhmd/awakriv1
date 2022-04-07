let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(thanks)).buffer(), `
╭◪ 〔 BIG THANKS TO 〕
☆ THANKS TO ALLAH SWT
☆ THANKS TO NURUTOMO
☆ THANKS TO RADBOT
☆ THANKS TO SHIRO 
☆ THANKS TO EXC
☆ THANKS TO TIO 
☆ THANKS TO ANDRI
☆ THANKS TO PENYEDIA APIKEY
☆ THANKS TO ORANG BERDONASI
╰◪
`.trim(), watermark, 'Back', '.menu')
handler.help = ['tqto']
handler.tags = ['main']
handler.command = /^(tqto|thanks|thanksto|bigthanks)$/i

module.exports = handler

// di ilangin jangan,di tambahin boleh

