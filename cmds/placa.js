const Discord = require("discord.js")
const mysql = require("mysql")

module.exports = {
    name: "placa",
    description: "placa",
    aliases: ["placa"],
    async execute(bot,message,args) {
        let con = mysql.createConnection({
            host: "127.0.0.1", // IP DA DB
            user: "root", // USER DA DB
            password: "", // SENHA DA DB
            database: "vrp" // NOME DA DB
        })

        let id = args[0]
        if(!id) return message.reply("Você não colocou um ID Válido.") // VAI RETORNAR SE NÃO COLOCAR UM ID
        if(isNaN(id)) return message.reply("Você não colocou um id válido, precisa ser número.") // VAI RETORNAR SE NÃO FOR UM NUMERO
        let placa = args[1] 
        if(!placa) return message.reply("Você não colocou uma placa.") // VAI RETORNAR SE NÃO DIGITAR NADA
        if (placa.length > 8) return message.reply("Só pode 8 Digitos.") // VAI RETORNARA SE FOR MAIS DE 8 DIGITOS
        let sql = `UPDATE vrp_user_identities SET registration = '${placa}' WHERE user_id = '${id}'` // MUDA DE DB PARA DB
        con.query(sql, function (err, result) {
            if (err) throw err;
            let embed = new Discord.MessageEmbed()
            .setDescription(`<a:verified:845321565339516978> | O ID **${id}** Teve a placa alterada para **${placa}**.`) // VARIAVEIS ID E PLACA
            .setColor(`292928`)
            message.channel.send(embed)
            message.delete()
        })
    }
}
