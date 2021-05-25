const Discord = require("discord.js")
const mysql = require("mysql")
const {name, ip, db, password} = require('./db.json');

module.exports = {
    name: "unwl",
    description: "unwl",
    aliases: ["unwl"],
    async execute(bot,message,args) {
        let con = mysql.createConnection({
            host: ip,
            user: name,
            password: password,
            database: db,
        })

        let id = args[0]
        if(!id) return message.reply("Você não colocou um ID.")
        let valor = 0
        let sql = `UPDATE vrp_users SET whitelisted = '${valor}' WHERE id = '${id}'`
        con.query(sql, function (err, result) {
            if (err) throw err;
            let embed = new Discord.MessageEmbed()
            .setDescription(`<a:ban:845317927938162738> | O ID **${id}** Teve a Whitelist retirada.`)
            .setColor(`292928`)
            message.channel.send(embed)
            message.delete()
        })
    }
}
