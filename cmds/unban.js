const Discord = require("discord.js")
const mysql = require("mysql")
const {name, ip, db, password} = require('./db.json');

module.exports = {
    name: "unban",
    description: "unban",
    aliases: ["unban"],
    async execute(bot,message,args) {
        let con = mysql.createConnection({
            host: ip,
            user: name,
            password: password,
            database: db,
        })

        let id = args[0]
        if(!id) return message.reply("Você não mencionou um ID.")
        if(isNaN(id)) return message.reply("Isso não é um ID válido.")
        let valor = 0
        let sql = `UPDATE vrp_users SET banned = '${valor}' WHERE id = '${id}'`
        con.query(sql, function (err, result) {
            if (err) throw err;
            let embed = new Discord.MessageEmbed()
            .setDescription(`<a:verified:845321565339516978> | O ID **${id}** Foi Desbanido.`)
            .setColor(`292928`)
            message.channel.send(embed)
            message.delete()
        })
    }
}
