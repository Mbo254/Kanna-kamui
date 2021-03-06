const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "stalkaov",
    alias: ["nickaov"],
    use: "<query>",
    desc: "Arena Of Valor Stalker",
    type: "stalker",
    example: `%prefix%command 293306941441181`,
    start: async(kanna, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/api/nickaov", { query: text }, "apikey"))
        let caption = `Arena Of Valor Stalker :\n\n`
        let i = fetch.result
        caption += `⭔ GameId : ${i.gameId}\n`
        caption += `⭔ UserName : ${i.userName}\n`
        kanna.sendText(m.from, caption, m)
    },
    isQuery: true
}