
let fs = require('fs')
let chalk = require('chalk')

global.linkGC = ['https://chat.whatsapp.com/GQfybywcgb3AzNBP1zAs0h', 'https://chat.whatsapp.com/BARZi2AR4P3Lu8Mq80eXjf'] // ganti jadi group lu
global.owner = ['62895327934887', '62895328590064'] // Masukan nomot kalian
global.mods = ['62895327934887', '62895328590064'] // Moderator
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Pengguna premium tidak memerlukan limit
global.APIs = { // API Prefix
  // name: 'https://website'
  bx: 'https://bx-hunter.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  hardianto: 'https://hardianto.xyz',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  caliph: 'https://caliphapi.com',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  fxc7: 'https://fxc7-api.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian^_^)
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://hardianto.xyz': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://api.xteam.xyz': 'cristian9407',
  'https://api.lolhuman.xyz': 'Dawnfrostkey',
  'https://caliphapi.com': 'ELYASXD',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://fxc7-api.herokuapp.com': 'fxc7COOL',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
  var sticker_name = 'ᴹᴿ𝙄𝙩𝙨𝙠𝙧𝙞 ×፝֟͜×'
  var sticker_author = 'IG : @mhdakri_'
  
} else {
  var sticker_name = stickerpack.spackname
  var sticker_author = stickerpack.sauthor
}

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})

global.packname = sticker_name
global.author = sticker_author

//Creator Bot
footer = '𝘈𝘸𝘢㉿𝘳𝘪 𝘖𝘧𝘤'
namabot = '𝘈𝘸𝘢㉿𝘳𝘪 𝘖𝘧𝘤'
namalu = '𝘈𝘸𝘢㉿𝘳𝘪 𝘖𝘧𝘤'

// silakan di ganti klo mau
global.wait = '⏳ 𝙒𝘼𝙄𝙏, 𝙎𝙀𝘿𝘼𝙉𝙂 𝘿𝙄𝙋𝙍𝙊𝙎𝙀𝙎...'
global.rpg = 'Fitur Rpg Dimatikan\nKetik *!enable* *rpg* untuk menggunakan fitur ini!\nKalo Mau main Disini aja\nhttps://chat.whatsapp.com/EheAWPrQMhV25xW0N7l7WD'
global.nsfw = '“Katakanlah kepada orang laki-laki yang beriman: Hendaklah mereka menahan pandanganya, dan memelihara kemaluannya; … Katakanlah kepada wanita yang beriman: Hendaklah mereka menahan pandangannya, dan kemaluannya, dan janganlah mereka Menampakkan perhiasannya, kecuali yang (biasa) nampak dari padany,” \n(TQS. Al-Nur [24]: 30-31).'
global.eror = '❗𝙎𝙚𝙧𝙫𝙚𝙧 𝙀𝙧𝙧𝙤𝙧...'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=500&scaleHeight=500&fontsize=100&fillTextType=0&backgroundColor=%23101820&text='
global.watermark = '𝘈𝘸𝘢㉿𝘳𝘪 𝘖𝘧𝘤' //change the watermark (beberapa harus manual)

// Ubah saja
global.image = 'https://telegra.ph/file/0bade17d51084aa4380b3.jpg'
global.bank = 'https://telegra.ph/file/d5ddf4cc627bb0e6bc420.jpg'
global.kandang = 'https://telegra.ph/file/67a6ee607d03a4e52757d.jpg'
global.kolam = 'https://telegra.ph/file/5aa5dfa3394477e11fb18.jpg'
global.thanks = 'https://telegra.ph/file/01917f7782b70de8f418d.jpg'

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 500 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
