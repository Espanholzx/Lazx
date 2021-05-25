const Discord = require("discord.js")
const mysql = require("mysql")
const {name, ip, db, password} = require('./db.json');

module.exports = {
    name: "placa",
    description: "placa",
    aliases: ["placa"],
    async execute(bot,message,args) {
        let con = mysql.createConnection({
            host: ip,
            user: name,
            password: password,
            database: db,
        })

        let id = args[0]
        if(!id) return message.reply("Você não colocou um ID Válido.")
        if(isNaN(id)) return message.reply("Você não colocou um id válido, precisa ser número.")
        let placa = args[1]
        if(!placa) return message.reply("Você não colocou uma placa.")
        if (placa.length > 8) return message.reply("Só pode 8 Digitos.")
        let sql = `UPDATE vrp_user_identities SET registration = '${placa}' WHERE user_id = '${id}'`
        con.query(sql, function (err, result) {
            if (err) throw err;
            let embed = new Discord.MessageEmbed()
            .setDescription(`<a:verified:845321565339516978> | O ID **${id}** Teve a placa alterada para **${placa}**.`)
            .setColor(`292928`)
            message.channel.send(embed)
            message.delete()
        })
    }
}
