const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "dailynews",
    alias: ["dailynews"],
    desc: "Latest News From Dailynews",
    type: "news",
    example: `%prefix%command`,
    start: async(kanna, m, {}) => {
        let fetch = await fetchUrl(global.api("zenz", "/api/dailynews", {}, "apikey"))
        let caption = `Latest News From Dailynews\n\n`
        for (let i of fetch.result) {
            caption += `⭔ News Title : ${i.berita}\n`
            caption += `⭔ Url : ${i.berita_url}\n\n`
        }
        kanna.sendFile(m.from, fetch.result[0].berita_thumb, "", m, { caption })
    }
}
