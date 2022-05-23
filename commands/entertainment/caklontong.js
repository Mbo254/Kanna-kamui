const { fetchUrl, sleep } = require("../../lib/Function")

module.exports = {
    name: "caklontong",
    alias: ["clontong"],
    desc: "Entertaiment Cak Lontong",
    type: "entertainment",
    start: async(kanna, m) => {
        if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
        let fetch = await fetchUrl(global.api("zenz", "/api/caklontong", {}, "apikey"))
        let result = await fetch.result
        kanna.sendText(m.from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\n\nWaktu : 30s`, m).then(() => {
            caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
            console.log("Jawaban: " + result.jawaban)
        })
        await sleep(30000)
        if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
            kanna.sendText(m.from, `Waktu Habis\n\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nKeterangan: ${result.deskripsi}`, m)
            delete caklontong[m.sender.split('@')[0]]
        }
    }
}