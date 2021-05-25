const Discord = require("discord.js")
const mysql = require("mysql")
const {name, ip, db, password} = require('./db.json');

module.exports = {
    name: "bank",
    description: "bank",
    aliases: ["bank"],
    async execute(bot,message,args) {
        let con = mysql.createConnection({
            host: ip,
            user: name,
            password: password,
            database: db,
        })

        let id = args[0]
        if(!id) return message.reply("Você não mencionou um ID.")
        if(isNaN(id)) return message.reply("Isso não é um ID Válido tem que ser um Número.")
        let valor = args[1]
        if(!valor) return message.reply("Você não colocou um valor.")
        if(isNaN(valor)) return message.reply("Isso não é um valor válido tem que ser um número.")
        let sql = `UPDATE vrp_users SET bank = '${valor}' WHERE id = '${id}'`
        con.query(sql, function (err, result) {
            if (err) throw err;
            let embed = new Discord.MessageEmbed()
            .setDescription(`<a:tenor:845305917485744199> | O saldo Bancário do ID **${id}** foi alterado para **${valor}**`)
            .setColor(`292928`)
            message.channel.send(embed)
            message.delete()
        })
    }
}
