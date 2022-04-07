let fs = require('fs')
let handler  = async (m, { 
conn, usedPrefix: _p }) => {
const {
    MessageType,
    Mimetype
} = require("@adiwajshing/baileys");
const anu = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: 'Uwu.jpeg', 
                    jpegThumbnail: fs.readFileSync('./src/awakri.jpg')
                          }
                        }
                      }

conn.sendMessage(m.chat, '𝘈𝘸𝘢㉿𝘳𝘪 𝘖𝘧𝘤',
MessageType.text, {quoted: anu, contextInfo:{"forwardingScore":999, "isForwarded": true}})
}



handler.help = ['doc']

handler.tags = ['owner']

handler.command = /^doc$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true

module.exports = handler
