const Discord = require("discord.js")
const mysql = require("mysql")

module.exports = {
    name: "bank",
    description: "bank",
    aliases: ["bank"],
    async execute(bot,message,args) {
        let con = mysql.createConnection({
            host: "127.0.0.1", // Ip da DB
            user: "root", // User da db
            password: "", // Senha da db
            database: "vrp" // Db
        })

        let id = args[0]
        if(!id) return message.reply("Você não mencionou um ID.") // Bot vai retornar se não mencionar nada só dar o comando
        if(isNaN(id)) return message.reply("Isso não é um ID Válido tem que ser um Número.") // Vai retornar se o que o cara boto não for um número
        let valor = args[1] 
        if(!valor) return message.reply("Você não colocou um valor.") // Vai retornar se não colocou nenhum valor
        if(isNaN(valor)) return message.reply("Isso não é um valor válido tem que ser um número.") // Vai retornar se não for um número
        let sql = `UPDATE vrp_user_moneys SET bank = '${valor}' WHERE user_id = '${id}'` // Isso aqui pode mudar de db para db
        con.query(sql, function (err, result) {
            if (err) throw err;
            let embed = new Discord.MessageEmbed()
            .setDescription(`<a:tenor:845305917485744199> | O saldo Bancário do ID **${id}** foi alterado para **${valor}**`) // da pra alterar a mensagem
            .setColor(`292928`) // a cor tambem da lateral do embed
            message.channel.send(embed)
            message.delete()
        })
    }
}
