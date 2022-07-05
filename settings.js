const fs = require('fs')
const chalk = require('chalk')

global.owner = ['6288232154376']
global.premium = ['6288232154376']
global.packname = ''
global.author = '⫹⫺ Ｒｙｕｕｋａ－ＭＤ 仫'
global.sessionName = 'WzFames'
global.namabotnya = '⫹⫺ Ｒｙｕｕｋａ－ＭＤ 仫'
global.namaownernya = 'Ｒｙｕｕｋａ 仫'
global.dapkey = 'Kirbotz123'
global.lolkey = 'Atakbotz'
global.kirkey = 'KirBotz'
global.wame = 'https://wa.me/6288232154376'
global.gckirbotz = 'https://chat.whatsapp.com/ERrRJ18SMI20NZbYvq7E3w'
global.ownerNumber = ["6288232154376@s.whatsapp.net"]
global.email = 'abiputrapratama34@gmail.com'
global.yt = 'https://youtube.com/c/Diging'
global.webkir = 'https://youtube.com/c/Diging'
global.githubkir = 'https://github.com/alok/'
global.region = 'Indonesia'
global.prefa = ['','!','.','#','-','•']
global.mess = {
    success: 'Success 💯',
    admin: 'Fitur Khusus Admin Group!!!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!!!',
    owner: 'Fitur Khusus Owner Bot!!!',
    group: 'Fitur Digunakan Hanya Untuk Group!!!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!!!',
    bot: 'Fitur Khusus Pengguna Nomor Bot!!!',
    error: 'Error Kak Silahkan Chat Owner',
    wait: '❗Waittt...',
    noPetualang: 'Itssss Kamu Belum Jadi Member Petualang, Silahkan Ketik .joinrpg <namamu>',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
    premium: 'Maaf Sebelumya Kamu Belum Premium, Silahkan Pencet Di Bawah Untuk Beli Premium',
    wrongFormat: 'Format salah, coba liat lagi di menu',
}


global.limitawal = {
    premium: "9999999",
    free: 25
}


global.thumb = fs.readFileSync('./Image/kirbotz.jpg')
global.thumbdm = fs.readFileSync('./Image/diamond.jpg')
global.thumbrpg = fs.readFileSync('./Image/kirbotzrpg.jpg')
global.imgjoinrpg = fs.readFileSync('./Image/joinrpg.jpg')
global.imgmining = fs.readFileSync('./Image/mining.jpg')
global.sticknya = fs.readFileSync('./Kir/JANGANDIUBAH/fuck.webp')

global.imgdevil = fs.readFileSync('./Image/img/devil.jpg')
global.imgslime = fs.readFileSync('./Image/img/slime.jpg')
global.imgdemon = fs.readFileSync('./Image/img/demon.jpg')
global.imggoblin = fs.readFileSync('./Image/img/goblin.jpg')
global.imgdemonking = fs.readFileSync('./Image/img/demonking.jpg')
global.imgbehemoth = fs.readFileSync('./Image/img/behemoth.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
