let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./src/tag.webp')
conn.fakeReply(m.chat, stc, '62895327934887@s.whatsapp.net', '*Kenapa Tag Owner Saya, kangen yaa☺*')
}
handler.customPrefix = /^(@awakri|@+62895327934887|@Krizyn|@+62 895-3279-34887)$/i
handler.command = new RegExp

module.exports = handler
