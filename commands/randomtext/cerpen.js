let { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "cerpen",
    alias: ["cerpendek"],
    desc: "Generate Random Cerita Pendek",
    type: "randomtext",
    example: `%prefix%command`,
    start: async(kanna, m, {}) => {
        let fetch = await fetchUrl(global.api("zenz", "/randomtext/cerpen", {}, "apikey"))
        let caption = `Generate Random Cerpen :\n\n`
        caption += `⭔ Judul : ${fetch.result.Judul}\n`
        caption += `⭔ Penulis : ${fetch.result.Penulis}\n\n`
        caption += `⭔ Cerita : ${fetch.result.cerita}\n\n`
        caption += `⭔ Sumber : ${fetch.result.sumber}\n`
        kanna.sendText(m.from, caption, m)
    }
}