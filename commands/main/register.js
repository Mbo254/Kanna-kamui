module.exports = {
    name: "register",
    alias: ["verify"],
    desc: "Add User To Database",
    type: "main",
    example: "%prefix%command",
    start: async(kanna, m) => {
        const { pushName, sender } = m
        const namaUser = `${pushName === undefined ? sender.split("@")[0] : pushName}`
        user.addUser(m.sender, namaUser, _user)
        kanna.sendText(m.from, "suksesfully registered", m)
    },
    noLimit: true,
}