module.exports = {
    name: "menu",
    alias: ["help","menu"],
    desc: "List all command",
    type: "main",
    start: async(kanna, m, { commands, args, prefix, text, toUpper }) => {
        const { pushName, sender } = m
        if (args[0]) {
            let data = []
            let name = args[0].toLowerCase()
            let cmd = commands.get(name) || Array.from(commands.values()).find((v) => v.alias.includes(name))
            if (!cmd || cmd.type == "hide") return m.reply("No Command Found")
            else data.push(`*Command :* ${cmd.name.replace(/^\w/, c => c.toUpperCase())}`)
            if (cmd.alias) data.push(`*Alias :* ${cmd.alias.join(", ")}`)
            if (cmd.use) data.push(`*Use:* ${cmd.use}`);
            if (cmd.desc) data.push(`*Description :* ${cmd.desc}\n`)
            if (cmd.example) data.push(`*Example :* ${cmd.example.replace(/%prefix/gi, prefix).replace(/%command/gi, cmd.name).replace(/%text/gi, text)}`)
            return m.reply(`*Info Command ${cmd.name.replace(/^\w/, c => c.toUpperCase())}*\n\n${data.join("\n")}`)
        } else {
            let teks = `Hello, ${pushName === undefined ? sender.split("@")[0] : pushName}\nHere is the Command List\n\n`

            for (let type of commands.type) {
                teks += `┌──⭓ *${toUpper(type)} Menu*\n`
                teks += `│\n`
                teks += `${commands.list[type].filter(v => v.type !== "hide").map((cmd) => `│⭔ ${prefix + cmd.name} ${cmd.use ? " " + cmd.use : ""}`).join("\n")}\n`
                teks += `│\n`
                teks += `└───────⭓\n\n`
            }

            teks += `Send ${prefix}help followed by a command name to get detail of command, ex: ${prefix}help sticker`;
            let templateButtons = [
                { urlButton: { displayText: "Source Code", url: "https://github.com/nexusNw/Kanna-kamui" } },
                { urlButton: { displayText: "Main APIs", url: "Take it from zenzapi.xyz" } },
                { quickReplyButton: { displayText: "Warning", id: "18+ content available.Avoid overusing them" } },
                { quickReplyButton: { displayText: "Maded by", id: "who else , itz Star Boy nexusNw" } },
                { quickReplyButton: { displayText: "Others", id: "Nothing here,🐦💔" } },
            ]
            
            let templateMessage = {
                image: { url: 'https://camo.githubusercontent.com/75f2d839b69589cca0c8f06b7a6053ac84a2b26c403fb55e11952c4f617f561f/68747470733a2f2f692e696d6775722e636f6d2f416c35753835452e6a706567' },
                caption: teks,
                footer: config.footer,
                templateButtons: templateButtons
            }

            kanna.sendMessage(m.from, templateMessage, { quoted: m })
        }
    },
    noLimit: true,
}
