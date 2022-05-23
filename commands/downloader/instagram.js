const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "instagram",
    alias: ["igdl","igreel","ig"],
    use: "<url>",
    desc: "Download Media From https://instagram.com",
    type: "downloader",
    example: "%prefix%command <url>",
    start: async(kanna, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/downloader/instagram", { url:isUrl(text)[0] }, "apikey"))
        for (let url of fetch.result) kanna.sendFile(m.from, url, "", m, { caption: `Downloaded Media From : ${isUrl(text)[0]}` })
    },
    isQuery: true
}