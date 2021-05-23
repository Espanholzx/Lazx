const Discord = require("discord.js")
const mysql = require("mysql")

module.exports = {
    name: "unwl",
    description: "unwl",
    aliases: ["unwl"],
    async execute(bot,message,args) {
        let con = mysql.createConnection({
            host: "127.0.0.1", // IP DA DB
            user: "root", // USER DA DB
            password: "", // SENHA DA DB
            database: "vrp" // NOME DA DB
        })

        let id = args[0]
        if(!id) return message.reply("Você não colocou um ID.") // VAI RETORNAR SE NÃO COLOCAR UM ID
        if(isNaN(id)) return message.reply("Esse ID É invalido.") // VAI RETORNAR SE NÃO FOR UM NUMERO
        let valor = 0
        let sql = `UPDATE vrp_users SET whitelisted = '${valor}' WHERE id = '${id}'` // MUDA DE DB PARA DB
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
