const { fetchUrl, sleep } = require("../../lib/Function")

module.exports = {
    name: "tebakkata",
    alias: ["tkata"],
    desc: "Entertaiment Tebak Kata",
    type: "entertainment",
    start: async(kanna, m) => {
        if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
        let fetch = await fetchUrl(global.api("zenz", "/api/tebakkata", {}, "apikey"))
        let result = await fetch.result
        kanna.sendText(m.from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\n\nWaktu : 30s`, m).then(() => {
            tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
            console.log("Jawaban: " + result.jawaban)
        })
        await sleep(30000)
        if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
            kanna.sendText(m.from, `Waktu Habis\n\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}`, m)
            delete tebakkata[m.sender.split('@')[0]]
        }
    }
}