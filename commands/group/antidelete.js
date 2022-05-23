module.exports = {
	name: "antidelete",
	alias: ["antidel"],
    use: "<options>",
	desc: "Enable or disable Antidelete Features",
    type: "group",
    example: "%prefix%command enable or disable",
    noLimit: true,
    start: async(kanna, m, { text }) => {
        if (text === 'enable') {
            if (isAntidelete === true) return m.reply('Antidelete already active')
            group.addAntidelete(m.from, _group)
            m.reply(`Successfully activated Antidelete`)
        } else if (text === 'disable') {
            if (isAntidelete === false) return m.reply('Antidelete already deactive')
            group.delAntidelete(m.from, _group)
            m.reply(`Successfully deactivated Antidelete`)
        } else {
            let buttons = [
                { buttonId: `antidelete enable `, buttonText: { displayText: 'ENABLE'}, type: 1 },
                 {buttonId: `antidelete disable `, buttonText: { displayText: 'DISABLE'}, type: 1 }
            ]
            let buttonMessage = {
                text: `*⭔ Antidelete Status:* ${group.cekAntidelete(m.from, _group) ? 'Activated' : 'Deactivated'}\n\n_Select enable or disable!_`,
                footer: config.footer,
                buttons: buttons,
                headerType: 4
            }
            kanna.sendMessage(m.from, buttonMessage, { quoted: m })
        }
	},
    isGroup: true,
    isAdmin: true,
}