const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "gsmarena",
    alias: ["gsmarena"],
    use: "<query>",
    desc: "Search Phone spec From Gsmarena",
    type: "webzone",
    example: `%prefix%command <query>`,
    start: async(kanna, m, { text, toUpper }) => {
        let fetch = await fetchUrl(global.api("zenz", "/webzone/gsmarena", { query: text }, "apikey"))
        let caption = `Gsmarena Search Query : ${toUpper(text)}\n\n`
        caption += `⭔ Title : ${fetch.result.judul}\n`
        caption += `⭔ Release : ${fetch.result.rilis}\n`
        caption += `⭔ Size : ${fetch.result.ukuran}\n`
        caption += `⭔ Type : ${fetch.result.type}\n`
        caption += `⭔ Storage : ${fetch.result.storage}\n`
        caption += `⭔ Display : ${fetch.result.display}\n`
        caption += `⭔ Inch : ${fetch.result.inchi}\n`
        caption += `⭔ Pixel : ${fetch.result.pixel}\n`
        caption += `⭔ Video Pixel : ${fetch.result.videoPixel}\n`
        caption += `⭔ RaM : ${fetch.result.ram}\n`
        caption += `⭔ Chipset : ${fetch.result.chipset}\n`
        caption += `⭔ Battery : ${fetch.result.batrai}\n`
        caption += `⭔ Battery Brand : ${fetch.result.merek_batre}\n\n`
        caption += `⭔ Detail : ${fetch.result.detail}\n`
        kanna.sendFile(m.from, fetch.result.thumb, "", m, { caption })
    },
    isQuery: true
}
