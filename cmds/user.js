const Discord = require("discord.js")
const mysql = require("mysql")

module.exports = {
    name: "user",
    description: "user",
    aliases: ["user"],
    async execute(bot,message,args) {
        let con = mysql.createConnection({
            host: "127.0.0.1", // IP DA DB
            user: "root", // USER DA DB
            password: "", // SENHA DA DB
            database: "vrp" // NOME DA DB
        })

        let id = args[0]
        if(!id) return message.reply("Você não citou um ID.") // VAI RETORNAR SE DEIXAR VAZIO
        let firstname = args[2]
        if(!firstname) return message.reply("Você não colocou o 1 Nome") // VAI RETORNAR SE DEIXAR VAZIO
        let name = args.slice(3).join(" ");
        if(!name) return message.reply("Você não colocou o Sobrenome") // VAI RETORNAR SE DEIXAR VAZIO
        let age = args[1]
        if(!age) return message.reply("Você não colocou a idade.") // VAI RETORNAR SE DEIXAR VAZIO
        if(isNaN(age)) return message.reply("Isso não é uma idade Válida.") // VAI RETORNAR SE NÃO COLOCAR UM NUMERO
        let sql = `UPDATE vrp_user_identities SET firstname = '${firstname}' WHERE user_id = '${id}'` // MUDA DE DB PARA DB
        let sql2 = `UPDATE vrp_user_identities SET name = '${name}' WHERE user_id = '${id}'` // MUDA DE DB PARA DB
        let sql3 = `UPDATE vrp_user_identities SET age = '${age}' WHERE user_id = '${id}'` // MUDA DE DB PARA DB
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
