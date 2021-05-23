const Discord = require("discord.js")
const mysql = require("mysql")

module.exports = {
    name: "wl",
    description: "wl",
    aliases: ["wl"],
    async execute(bot,message,args) {
        let con = mysql.createConnection({
            host: "127.0.0.1", // IP DA DB
            user: "root", // USER DA DB
            password: "", // SENHA DA DB
            database: "vrp" // NOME DA DB
        })

        let id = args[0]
        if(!id) return message.reply("Você não colocou Um ID") // VAI RETORNAR SE NÃO BOTAR STEAM HEX
        let valor = 1
        let sql = `UPDATE vrp_infos SET whitelist = '${valor}' WHERE user_id = '${id}'` // MUDA DE DB PARA DB
        con.query(sql, function (err, result) {
            if (err) throw err;
            let embed = new Discord.MessageEmbed()
            .setDescription(`<a:verified:845321565339516978> |O ID **${id}** Teve a Whitelist aprovada.`)
            .setColor(`292928`)
            message.channel.send(embed)
            message.delete()
        })
    }
}
