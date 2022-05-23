const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "webtoons",
    alias: ["webtoon"],
    use: "<query>",
    desc: "Search story From webtoons",
    type: "webzone",
    example: `%prefix%command <query>`,
    start: async(kanna, m, { text, toUpper }) => {
        let fetch = await fetchUrl(global.api("zenz", "/webzone/webtoons", { query: text }, "apikey"))
        let caption = `Webtoons Search Query : ${toUpper(text)}\n\n`
        for (let i of fetch.result) {
            caption += `⭔ Title : ${i.judul}\n`
            caption += `⭔ Like : ${i.like}\n`
            caption += `⭔ Creator : ${i.creator}\n`
            caption += `⭔ Genre : ${i.genre}\n`
            caption += `⭔ Thumbnail : ${i.thumbnail}\n`
            caption += `⭔ Url : ${i.url}\n\n`
        }
        //kanna.sendFile(m.from, fetch.result[0].img, "", m, { caption }) the picture hit the internet is positive
        kanna.sendText(m.from, caption, m)
    },
    isQuery: true
}