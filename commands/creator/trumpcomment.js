module.exports = {
    name: "trumpcomment",
    alias: ["trc","trumptweet"],
    use: "<query>",
    desc: "Trump Twitter Comment Maker",
    type: "creator",
    example: "%prefix%command <query>",
    start: async(kanna, m, { text }) => {
        kanna.sendFile(m.from, global.api("zenz", "/creator/trump", {text: text}, "apikey"), "", m)
    },
    isQuery: true
}