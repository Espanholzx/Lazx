const Discord = require("discord.js")
const mysql = require("mysql")

module.exports = {
    name: "ban",
    description: "ban",
    aliases: ["ban"],
    async execute(bot,message,args) {
        let con = mysql.createConnection({
            host: "127.0.0.1", // Host da db
            user: "root", // User da db
            password: "", // Senha da db
            database: "vrp" // Bota sua Db aqui '-'
        })

        let id = args[0]
        if(!id) return message.reply("Você não mencionou um ID.")
        if(isNaN(id)) return message.reply("Isso não é um ID válido.")
        let valor = 1
        let sql = `UPDATE vrp_users SET banned = '${valor}' WHERE id = '${id}'` // Isso aqui pode mudar de db para db (Se não souber como ver isso chama Discord
        con.query(sql, function (err, result) {
            if (err) throw err;
            let embed = new Discord.MessageEmbed()
            .setDescription(`<a:ban:845317927938162738> | O ID **${id}** Foi Banido.`) // Se quiser alterar a mensagem a variavel é id
            .setColor(`292928`) // Color em Hex
            message.channel.send(embed) // Se quiser da pra botar um canal predefinido aqui ele vai mandar aonde o comando foi executado
            message.delete()
        })
    }
}
