const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "simi",
    alias: ["sim","simisimi"],
    use: "<query>",
    desc: "Get Respond From Simi Simi",
    type: "entertainment",
    example: `%prefix%command <query>`,
    start: async(kanna, m, { text }) => {
        try {
            let fetch = await fetchUrl(global.api("zenz", "/api/simisimi", { text: encodeURIComponent(text) }, "apikey"))
            result = fetch.result.message
            kanna.sendText(m.from, result, m)
        } catch {
            m.reply("Error Try Repeat")
        }
    },
    isQuery: true
}