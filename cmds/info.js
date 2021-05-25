const Discord = require("discord.js")
const mysql = require("mysql")
const {name, ip, db, password} = require('./db.json');

module.exports = {
    name: "info",
    description: "info",
    aliases: ["info"],
    async execute(bot,message,args) {
        let con = mysql.createConnection({
            host: ip,
            user: name,
            password: password,
            database: db,
        })
        let id = args[0]
         con.query(`SELECT phone FROM vrp_users WHERE id = '${id}'`, function (err, result1, field) {

        con.query(`SELECT registration FROM vrp_users WHERE id = '${id}'`, function (err, result2, field) {

       con.query(`SELECT name FROM vrp_users WHERE id = '${id}'`, function (err, result3, field) {

   con.query(`SELECT name2 FROM vrp_users WHERE id = '${id}'`, function (err, result4, field) {

    con.query(`SELECT bank FROM vrp_users WHERE id = '${id}'`, function (err, result6, field) {

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

    }
}
