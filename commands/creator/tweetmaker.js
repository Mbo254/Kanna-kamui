module.exports = {
    name: "tweetmaker",
    alias: ["twc","tweetcomment"],
    use: "<query>",
    desc: "Twitter Comment Maker",
    type: "creator",
    example: "%prefix%command <query>",
    start: async(kanna, m, { text }) => {
        kanna.sendFile(m.from, global.api("zenz", "/creator/maketweet", {
            text: text, 
            text2: m.pushName
        }, "apikey"), "", m)
    },
    isQuery: true
}