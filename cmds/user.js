const Discord = require("discord.js")
const mysql = require("mysql")
const {name, ip, db, password} = require('./db.json');

module.exports = {
    name: "user",
    description: "user",
    aliases: ["user"],
    async execute(bot,message,args) {
        let con = mysql.createConnection({
            host: ip,
            user: name,
            password: password,
            database: db,
        })

        let id = args[0]
        if(!id) return message.reply("Você não citou um ID.")
        let firstname = args[2]
        if(!firstname) return message.reply("Você não colocou o 1 Nome")
        let name = args.slice(3).join(" ");
        if(!name) return message.reply("Você não colocou o Sobrenome")
        let age = args[1]
        if(!age) return message.reply("Você não colocou a idade.")
        if(isNaN(age)) return message.reply("Isso não é uma idade Válida.")
        let sql = `UPDATE vrp_user_identities SET firstname = '${firstname}' WHERE user_id = '${id}'`
        let sql2 = `UPDATE vrp_user_identities SET name = '${name}' WHERE user_id = '${id}'`
        let sql3 = `UPDATE vrp_user_identities SET age = '${age}' WHERE user_id = '${id}'`
        con.query(sql, function (err, result) {
            if (err) throw err;
        })
        con.query(sql2, function (err, result) {
            if (err) throw err;
        })
        con.query(sql3, function (err, result) {
            if (err) throw err;
            let embed = new Discord.MessageEmbed()
            .setDescription(`<a:verified:845321565339516978> | O ID **${id}** teve o nome alterado para **${firstname} ${name}** e idade para **${age}**.`)
            .setColor(`292928`)
            message.channel.send(embed)
            message.delete()
        })
    }
}
