const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "sfilesearch",
    alias: ["sfilesr"],
    use: "<query>",
    desc: "Search files from solidfiles",
    type: "search",
    example: `%prefix%command <query>`,
    start: async(kanna, m, { text, toUpper }) => {
        let fetch = await fetchUrl(global.api("zenz", "/searching/sfilesearch", { query: text }, "apikey"))
        let caption = `sfile Search Query : ${toUpper(text)}\n\n`
        for (let i of fetch.result) {
            caption += `⭔ Title : ${i.name}\n`
            caption += `⭔ Url : ${i.link}\n\n`
        }
        kanna .sendText(m.from, caption, m)
    },
    isQuery: true
}
