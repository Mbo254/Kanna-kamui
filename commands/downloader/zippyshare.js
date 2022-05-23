const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "zippyshare",
    alias: ["zippydownload"],
    use: "<url>",
    desc: "Download Media From https://zippyshare.com",
    type: "downloader",
    example: "%prefix%command <url>",
    start: async(kanna, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/downloader/zippyshare", { url: isUrl(text)[0] }, "apikey"))
        kanna.sendFile(m.from, fetch.result.link, "", m)
    },
    isQuery: true
}