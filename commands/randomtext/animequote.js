let { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "animequote",
    alias: ["animeqts"],
    desc: "Generate Random Anime Quotes",
    type: "randomtext",
    example: `%prefix%command`,
    start: async(kanna, m, {}) => {
        let fetch = await fetchUrl(global.api("zenz", "/randomtext/animequotes2", {}, "apikey"))
        let caption = `Generate Random Anime Quotes :\n\n`
        caption += `⭔ Character : ${fetch.result.character}\n`
        caption += `⭔ Anime : ${fetch.result.anime}\n`
        caption += `⭔ Episode : ${fetch.result.episode}\n\n`
        caption += `⭔ Quotes : ${fetch.result.quotes}\n`
        kanna.sendFile(m.from, fetch.result.thumb, "", m, { caption })
    }
}