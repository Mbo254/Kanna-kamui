module.exports = {
	name: "antilink",
	alias: ["antilinkgc","antilinkgroup"],
    use: "<options>",
	desc: "Enable or disable Antilink Features",
    type: "group",
    example: "%prefix%command enable or disable",
    noLimit: true,
    start: async(kanna, m, { text }) => {
        if (text === 'enable') {
            if (isAntilink === true) return m.reply('Antilink already active')
            group.addAntilink(m.from, _group)
            m.reply(`Successfully activated Antilink`)
        } else if (text === 'disable') {
            if (isAntilink === false) return m.reply('Antilink already deactive')
            group.delAntilink(m.from, _group)
            m.reply(`Successfully deactivated Antilink`)
        } else {
            let buttons = [
                { buttonId: `antilink enable `, buttonText: { displayText: 'ENABLE'}, type: 1 },
                 {buttonId: `antilink disable `, buttonText: { displayText: 'DISABLE'}, type: 1 }
            ]
            let buttonMessage = {
                text: `*⭔ Antilink Status:* ${group.cekAntilink(m.from, _group) ? 'Activated' : 'Deactivated'}\n\n_Select enable or disable!_`,
                footer: config.footer,
                buttons: buttons,
                headerType: 4
            }
            kanna.sendMessage(m.from, buttonMessage, { quoted: m })
        }
	},
    isGroup: true,
    isAdmin: true,
    isBotAdmin: true
}