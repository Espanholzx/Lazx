const Discord = require("discord.js")
const mysql = require("mysql")

module.exports = {
    name: "numero",
    description: "numero",
    aliases: ["numero"],
    async execute(bot,message,args) {
        let con = mysql.createConnection({
            host: "127.0.0.1", // ip da db
            user: "root", // user da db
            password: "", // senha da db
            database: "vrp" // nome da db
        })

        let id = args[0]
        if(!id) return message.reply("Você não colocou o ID.") // vai retornar se n mencionar nenhum id
        if(isNaN(id)) return message.reply("Isso não é um ID Válido, Tem que ser um número.") // vai retornar se não for um número
        let numero = args[1]
        if(!numero) return message.reply("Você não colocou um numero de telefone.") // Vai retornar se não botar nada
        if (numero.length > 6) return message.reply("Só pode 6 digitos") // vai retornar se for mais de 6 digitos
        if(isNaN(numero)) return message.reply("Isso não é um numero Válido, precisa ser Números.") // vai retornar se não for numero
        let sql = `UPDATE vrp_user_identities SET phone = '${numero}' WHERE user_id = '${id}'` // Isso muda de db para db
        con.query(sql, function (err, result) {
            if (err) throw err;
            let embed = new Discord.MessageEmbed()
            .setDescription(`<a:verified:845321565339516978> | O Número do ID **${id}** foi alterado para **${numero}**`) // da pra alterar as variaveis são numero e id
            .setColor(`292928`)
            message.delete()
            message.channel.send(embed)
        })
    }
}
