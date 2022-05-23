const { getRandom, isUrl } = require("../../lib/Function")
const request = require('request')
const fs = require('fs')

module.exports = {
    name: "scircle",
    alias: ["stickercircle", "circlesticker"],
    use: "<reply>",
    desc: "Convert Image To Circle Sticker",
    type: "convert",
    example: `%prefix%command --image reply`,
    start: async(kanna, m, { command, prefix, quoted, mime, text }) => {
        if (/image/.test(mime)) {
            let download = await kanna.downloadAndSaveMediaMessage(quoted)
            file_name = getRandom('jpg')
            request({
                url: global.api("zenz", "/photoeditor/circle", {}, "apikey"),
                method: 'POST',
                formData: {
                    "sampleFile": fs.createReadStream(download)
                },
                encoding: "binary"
            }, async function(error, response, body) {
                fs.unlinkSync(download)
                fs.writeFileSync(file_name, body, "binary")
                ini_buff = fs.readFileSync(file_name)
                await kanna.sendFile(m.from, ini_buff, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] }).then(() => {
                    fs.unlinkSync(file_name)
                })
            })
        } else if (isUrl(text)) {
            kanna.sendFile(m.from, global.api("zenz", "/photoeditor/circle", { url: isUrl(text)[0] }, "apikey"), "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
        }   else {
            return m.reply(`Reply to Supported media With Caption ${prefix + command}`, m.from, { quoted: m })
        }
    }
}