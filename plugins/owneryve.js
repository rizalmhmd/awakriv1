let handler = function (m) {
	this.sendContact(m.chat, '62895327934887', 'BOSS BOT KECE :)', m)
}

handler.customPrefix = ['Owner bot'] 
handler.command = new RegExp

module.exports = handler
