const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "gempa",
    alias: ["gempabmkg"],
    desc: "Get Gempa Information From BMKG",
    type: "information",
    example: `%prefix%command`,
    start: async(kanna, m, {}) => {
        let fetch = await fetchUrl(global.api("zenz", "/api/bmkg/gempa", {}, "apikey"))
        let caption = `Covid-19 Information :\n\n`
        let i = fetch.result
        caption += `⭔ Date : ${i.tanggal}\n`
        caption += `⭔ Jam : ${i.jam}\n`
        caption += `⭔ Datetime : ${i.datetime}\n`
        caption += `⭔ Coordinates : ${i.coordinates}\n`
        caption += `⭔ Star : ${i.lintang}\n`
        caption += `⭔ Longitude : ${i.bujur}\n`
        caption += `⭔ Magnitude : ${i.magnitude}\n`
        caption += `⭔ Depth : ${i.kedalaman}\n`
        caption += `⭔ Region : ${i.wilayah}\n`
        caption += `⭔ Potency : ${i.potensi}\n`
        caption += `⭔ Felt : ${i.dirasakan}\n`
        caption += `⭔ Shakemap : ${i.shakemap}\n`
        kanna.sendFile(m.from, i.shakemap, "", m, { caption })
    }
}