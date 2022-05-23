const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "mangatoon",
    alias: [],
    use: "<query>",
    desc: "Search Anime From Mangatoon",
    type: "animeweb",
    example: `%prefix%command <query>`,
    start: async(kanna, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/anime/mangatoon", { query: text }, "apikey"))
        let caption = `Mangatoon Search :\n\n`
        let i = fetch.result
        caption += `⭔ Title : ${i.judul}\n`
        caption += `⭔ Genre : ${i.genre}\n`
        caption += `⭔ Author : ${i.Author}\n`
        caption += `⭔ Link : ${i.Link}\n`
        kanna.sendFile(m.from, i.thumb, "", m, { caption })
    },
    isQuery: true
}