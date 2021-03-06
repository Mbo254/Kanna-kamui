const { isUrl } = require("../../lib/Function")

module.exports = {
    name: "dl",
    alias: ["dl"],
    use: "<url>",
    desc: "Send Media From URL",
    type: "downloader",
    example: "%prefix%command <url>",
    start: async(kanna, m, { text, args }) => {
        if (!isUrl(text)) return  m.reply(`Invalid url`)
        let [a, b] = args
        if (a.toLowerCase() === "audio") {
            kanna.sendMessage(m.from, { audio: { url: isUrl(b)[0] }, mimetype: "audio/mpeg", fileName: ".mp3" }, { quoted: m })
        } else {
            kanna.sendFile(m.from, isUrl(a)[0], "", m)
        }
    },
    isQuery: true
}