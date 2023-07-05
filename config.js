import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6289687537657', 'AzX美', true]
] 
global.mods = []
global.prems = []
// Info
global.nomorwa = '6289687537657'
global.packname = 'AzX - MD by'
global.author = '© AzX美'
global.namebot = '​AzX - MD'
global.wm = '© AzX By Phmi美'
global.stickpack = 'AzX - MD by'
global.stickauth = '© AzX美'
// Link Sosmed
global.sig = 'https://shoplinks.to/vyna-store'
global.sgh = 'https://github.com/Phmiuuu'
global.sgc = 'https://chat.whatsapp.com/DPqSp9P0roHH3bHEoTnLhM'
// Donasi
global.psaweria = 'https://shoplinks.to/vyna-store'
global.ptrakterr = 'https://shoplinks.to/vyna-store'
global.povo = '0896-8753-7657'
// Info Wait
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.xyro = 'xCOpP5f36W'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
}

/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "xCOpP5f36W",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})