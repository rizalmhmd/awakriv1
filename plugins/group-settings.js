let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": `Allo mypren👋, ${conn.getName(m.sender)}`,
                     "description": `
┏━━〔 𝙎𝙀𝙏𝙏𝙄𝙉𝙂 𝙂𝙍𝙊𝙐𝙋 〕━֍
┃ Fitur Bot ini untuk 
┃ mengaktifkan dan mematikan 
┃ Fitur Bot yang berada di Grup
┗━━━━━━━━━━━━━━֍
┏━━〔 𝘼𝘾𝘾𝙊𝙐𝙉𝙏 𝙊𝙒𝙉𝙀𝙍 〕━֍
┃⬣ GROUP OFFICIAL KRIZYN
┃➥ tinyurl.com/KRIZYNOFC
┃⬣ ALL SOSMED OWNER BOT
┃➥ lynk.id/kri.com
┃⬣ GROUP WANGSAF BOTZ
┃➥ tinyurl.com/KRIZYNWANGSAFBOTz
┗━━━━━━━━━━━━━━֍`.trim(),
                        "footerText": "𝘑𝘪𝘬𝘢 𝘮𝘦𝘯𝘦𝘮𝘶𝘬𝘢𝘯 𝘣𝘶𝘨 𝘥𝘢𝘭𝘢𝘮 𝘱𝘦𝘯𝘨𝘨𝘶𝘯𝘢𝘢𝘯\n𝘚𝘪𝘭𝘢𝘩𝘬𝘢𝘯 𝘭𝘢𝘱𝘰𝘳𝘬𝘢𝘯 𝘰𝘳 𝘵𝘢𝘯𝘺𝘢𝘬𝘢𝘯 𝘬𝘦𝘱𝘢𝘥𝘢 𝙊𝙬𝙣𝙚𝙧",
                        "buttonText": "Setting",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    {
                                    	"title": "WELCOME👋",
                                        "description": "mengaktifkan fitur welcome",
                                        "rowId": ".on welcome"
                                        },{
                                    	"title": "OFF WELCOME👋",
                                        "description": "menonaktifkan fitur welcome",
                                        "rowId": ".off welcome"
                                          },{
                                    	"title": "AUTOREAD💬",
                                        "description": "mengaktifkan fitur autoread",
                                        "rowId": ".on autoread"
                                            },{
                                    	"title": "OFF AUTOREAD💬",
                                        "description": "menonaktifkan fitur autoread",
                                        "rowId": "off autoreas"
                                              },{
                                    	"title": "AUTOLEVELUP⏰",
                                        "description": "mengaktifkan fitur utolevelup",
                                        "rowId": ".on autolevelup"
                                                },{
                                    	"title": "OFF AUTOLEVELUP⏰",
                                        "description": "enonaktifkan fitur autolevelup",
                                        "rowId": ".off autolevelup"
                                        },{
                                    	"title": "ANTI DELETE⛔",
                                        "description": "mengaktifkan fitur antidelete",
                                        "rowId": ".on delete"
                                        },{
                                        "title": "OFF ANTI DELETE⛔",
                                        "description": "menonaktifkan fitur antidelete",
                                        "rowId": ".off delete"
                                        },{
                                        "title": "VIEWONCE💾",
                                        "description": "mengaktifkan fitur viewonce",
                                        "rowId": ".on viewonce"
                                        },{
                                        "title": "OFF VIEWONCE💾",
                                        "description": "menonaktifkan fitur viewonce",
                                        "rowId": ".off viewonce"     
                                          },{
                                    	"title": "RESTRICT⁉️",
                                        "description": "mengaktifkan fitur restrict",
                                        "rowId": ".on restrict"
                                            },{
                                    	"title": "OFF RESTRICT⁉️",
                                        "description": "menonaktifkan fitur restrict",
                                        "rowId": ".on restrict"
                                        },{
                                        "title": "DETECT⁉",
                                        "description": "mengaktifkan fitur detect",
                                        "rowId": ".on detect"
                                        },{
                                        "title": "OFF DETECT⁉",
                                        "description": "menonaktifkan fitur detect",
                                        "rowId": ".off detect"
                                        },{
                                    	"title": "ANTISPAM🚫",
                                        "description": "mengaktifkan fitur antispam",
                                        "rowId": ".on antispam"
                                        },{
                                    	"title": "OFF ANTISPAM🚫",
                                        "description": "menonaktifkan fitur antispam",
                                        "rowId": ".off antispam"
                                         },{
                                      	"title": "ANTITROLI🚫",
                                        "description": "mengaktifkan fitur antitroli",
                                        "rowId": ".off antitroli"
                                        },{
                                    	"title": "OFF ANTITROLI🚫",
                                        "description": "menonaktifkan fitur antitroli",
                                        "rowId": ".off antitroli"
                                        },{
                                    	"title": "ANTILINK❗",
                                        "description": "mengaktifkan fitur antilink",
                                        "rowId": ".on antilink"
                                        },{
                                    	"title": "OFF ANTILINK❗",
                                        "description": "menonaktifkan fitur antilink",
                                        "rowId": ".off antilink"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": "0@s.whatsapp.net",
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})

handler.help = ['Setting Bot']
handler.tags = ['main']
handler.command = /^(grups|setelangrub|grubsett|settingsgrub|grubsettings|settgrub|groupsett)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
