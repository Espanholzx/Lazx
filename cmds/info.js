const Discord = require("discord.js")
const mysql = require("mysql")

module.exports = {
    name: "info",
    description: "info",
    aliases: ["info"],
    async execute(bot,message,args) {
        let con = mysql.createConnection({
            host: "127.0.0.1", // ip da db
            user: "root", // user da db
            password: "", // senha da db
            database: "vrp" // nome da db
        })
        let id = args[0]
         con.query(`SELECT phone FROM vrp_user_identities WHERE user_id = '${id}'`, function (err, result1, field) { // Pode mudar de db para db (Não sei como ta a tua)

        con.query(`SELECT registration FROM vrp_user_identities WHERE user_id = '${id}'`, function (err, result2, field) { // Pode mudar de db para db (Não sei como ta a tua)

       con.query(`SELECT firstname FROM vrp_user_identities WHERE user_id = '${id}'`, function (err, result3, field) { // Pode mudar de db para db (Não sei como ta a tua)

   con.query(`SELECT name FROM vrp_user_identities WHERE user_id = '${id}'`, function (err, result4, field) { // Pode mudar de db para db (Não sei como ta a tua)

con.query(`SELECT age FROM vrp_user_identities WHERE user_id = '${id}'`, function (err, result5, field) { // Pode mudar de db para db (Não sei como ta a tua)
    con.query(`SELECT bank FROM vrp_user_moneys WHERE user_id = '${id}'`, function (err, result6, field) { // Pode mudar de db para db (Não sei como ta a tua)
 
let embed = new Discord.MessageEmbed()
.addField("**Nome:**", `\`\`\`${result3[0].firstname}\`\`\``) 
.addField("**Sobrenome:**", `\`\`\`${result4[0].name}\`\`\``)
.addField("**Idade:**", `\`\`\`${result5[0].age}\`\`\``)
.addField("**Telefone:**", `\`\`\`${result1[0].phone}\`\`\``)
.addField("**RG:**", `\`\`\`${result2[0].registration}\`\`\``)
.addField("**Saldo Bancário:**", `\`\`\`${result6[0].bank}\`\`\``)
message.channel.send(embed)
message.delete()

})
})
})
})
})
})

    }
}
