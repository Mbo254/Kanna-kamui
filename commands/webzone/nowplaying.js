const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "nowplaying",
    alias: ["nowplayingbiop"],
    desc: "Search Jadwal From Jadwalnonton",
    type: "webzone",
    example: `%prefix%command`,
    start: async(kanna, m, {}) => {
        let fetch = await fetchUrl(global.api("zenz", "/webzone/nowplayingbioskop", {}, "apikey"))
        let caption = `Now Cinema Playing :\n\n`
        for (let i of fetch.result) {
            caption += `⭔ Title : ${i.title}\n`
            caption += `⭔ Thumb : ${i.img}\n`
            caption += `⭔ Url : ${i.url}\n\n`
        }
        kanna.sendFile(m.from, fetch.result[0].img, "", m, { caption })
    },
}
