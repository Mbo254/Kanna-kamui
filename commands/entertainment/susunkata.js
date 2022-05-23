const { fetchUrl, sleep } = require("../../lib/Function")

module.exports = {
    name: "susunkata",
    alias: ["skata"],
    desc: "Entertaiment Susun Kata",
    type: "entertainment",
    start: async(kanna, m) => {
        if (susunkata.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
        let fetch = await fetchUrl(global.api("zenz", "/api/susunkata", {}, "apikey"))
        let result = await fetch.result
        kanna.sendText(m.from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nTipe: ${result.tipe}\n\nWaktu : 30s`, m).then(() => {
            susunkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
            console.log("Jawaban: " + result.jawaban)
        })
        await sleep(30000)
        if (susunkata.hasOwnProperty(m.sender.split('@')[0])) {
            kanna.sendText(m.from, `Waktu Habis\n\nJawaban:  ${susunkata[m.sender.split('@')[0]]}`, m)
            delete susunkata[m.sender.split('@')[0]]
        }
    }
}