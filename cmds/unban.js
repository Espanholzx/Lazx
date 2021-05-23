const Discord = require("discord.js")
const mysql = require("mysql")

module.exports = {
    name: "unban",
    description: "unban",
    aliases: ["unban"],
    async execute(bot,message,args) {
        let con = mysql.createConnection({
            host: "127.0.0.1", // IP DA DB
            user: "root", // USER DA DB
            password: "", // SENHA DA DB
            database: "vrp" // Bota sua Db aqui '-'
        })

        let id = args[0]
        if(!id) return message.reply("Você não mencionou um ID.") // VAI RETORNAR SE NÃO BOTAR UM ID
        if(isNaN(id)) return message.reply("Isso não é um ID válido.") // VAI RETORNAR SE NÃO FOR UM NUMERO
        let valor = 0
        let sql = `UPDATE vrp_users SET banned = '${valor}' WHERE id = '${id}'` // MUDA DE DB PARA DB
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
