const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "jagokata",
    alias: ["jkata"],
    use: "<query>",
    desc: "Search Say from jagokata",
    type: "randomtext",
    example: `%prefix%command <query>`,
    start: async(kanna, m, { text, toUpper }) => {
        let fetch = await fetchUrl(global.api("zenz", "/api/jagokata", { query: text }, "apikey"))
        let caption = `Good Words Query : ${toUpper(text)}\n\n`
        let i = fetch.result
        caption += `⭔ Message : ${i.message}\n\n`
        caption += `⭔ By : ${i.by}\n`
        kanna.sendText(m.from, caption, m)
    },
    isQuery: true
}