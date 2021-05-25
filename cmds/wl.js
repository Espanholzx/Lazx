const Discord = require("discord.js")
const mysql = require("mysql")
const {name, ip, db, password} = require('./db.json');
module.exports = {
    name: "wl",
    description: "wl",
    aliases: ["wl"],
    async execute(bot,message,args) {
        let con = mysql.createConnection({
            host: ip,
            user: name,
            password: password,
            database: db,
        })

        let id = args[0]
        if(!id) return message.reply("Você não colocou a steam hex")
        let valor = 1
        let sql = `UPDATE vrp_infos SET whitelist = '${valor}' WHERE steam = '${id}'`
        con.query(sql, function (err, result) {
            if (err) throw err;
            let embed = new Discord.MessageEmbed()
            .setDescription(`<a:verified:845321565339516978> | A Steam hex **${id}** Teve a Whitelist aprovada.`)
            .setColor(`292928`)
            message.channel.send(embed)
            message.delete()
        })
    }
}
