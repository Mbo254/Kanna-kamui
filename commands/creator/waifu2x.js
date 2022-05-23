const { getRandom, isUrl } = require("../../lib/Function")
const request = require('request')
const fs = require('fs')

module.exports = {
    name: "waifu2x",
    alias: ["waifu2x"],
    use: "<reply>",
    desc: "Upscaler Image From waifu2x",
    type: "creator",
    example: `%prefix%command --image reply`,
    start: async(kanna, m, { command, prefix, quoted, mime }) => {
        if (/image/.test(mime)) {
            let download = await kanna.downloadAndSaveMediaMessage(quoted)
            file_name = getRandom('jpg')
            request({
                url: global.api("zenz", "/creator/waifu2x", {}, "apikey"),
                method: 'POST',
                formData: {
                    "sampleFile": fs.createReadStream(download)
                },
                encoding: "binary"
            }, async function(error, response, body) {
                fs.unlinkSync(download)
                fs.writeFileSync(file_name, body, "binary")
                ini_buff = fs.readFileSync(file_name)
                await kanna.sendFile(m.from, ini_buff, "", m).then(() => {
                    fs.unlinkSync(file_name)
                })
            })
        } else if (isUrl(text)) {
            kanna.sendFile(m.from, global.api("zenz", "/creator/waifu2x", { url: isUrl(text)[0] }, "apikey"), "", m)
        }   else {
            return m.reply(`Reply to Supported media With Caption ${prefix + command}`, m.from, { quoted: m })
        }
    }
}