const Discord = require("discord.js")
const mysql = require("mysql")
const {name, ip, db, password} = require('./db.json');

module.exports = {
    name: "numero",
    description: "numero",
    aliases: ["numero"],
    async execute(bot,message,args) {
        let con = mysql.createConnection({
            host: ip,
            user: name,
            password: password,
            database: db,
        })

        let id = args[0]
        if(!id) return message.reply("Você não colocou o ID.")
        if(isNaN(id)) return message.reply("Isso não é um ID Válido, Tem que ser um número.")
        let numero = args[1]
        if(!numero) return message.reply("Você não colocou um numero de telefone.")
        if (numero.length > 6) return message.reply("Só pode 6 digitos")
        if(isNaN(numero)) return message.reply("Isso não é um numero Válido, precisa ser Números.")
        let sql = `UPDATE vrp_user_identities SET phone = '${numero}' WHERE user_id = '${id}'`
        con.query(sql, function (err, result) {
            if (err) throw err;
            let embed = new Discord.MessageEmbed()
            .setDescription(`<a:verified:845321565339516978> | O Número do ID **${id}** foi alterado para **${numero}**`)
            .setColor(`292928`)
            message.delete()
            message.channel.send(embed)
        })
    }
}
