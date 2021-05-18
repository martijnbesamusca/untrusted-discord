const fs = require("fs")
const Discord = require("discord.js")
const bot = new Discord.Client()
const config = require("./config.js")
require("dotenv").config()
const log = require("./utils/log.js")
const getCommandName = require("./utils/getCommandName")

const admins = config.admins
let adminCommands = [], commandAliases = []

bot.commands = new Discord.Collection()

const commandFiles = fs.readdirSync("./commands").filter(f => f.endsWith(".js"))

const adminCommandFiles = fs.readdirSync("./adminCommands").filter(f => f.endsWith(".js"))

for(const file of commandFiles) {
    const command = require(`./commands/${file}`)
    bot.commands.set(command.name, command)
    command.aliases.split(",").forEach(al => commandAliases.push({alias: al, cmd: command.name}))
}
for (const file of adminCommandFiles) {
    const command = require(`./adminCommands/${file}`)
    bot.commands.set(command.name, command)
    command.aliases.split(",").forEach(al => commandAliases.push({alias: al, cmd: command.name}))
    adminCommands.push(command.name)
}

bot.on("ready", () => {
    log(`logged in as ${bot.user.tag}`, "info")
    if(bot.user.username != config.bot_name)
        bot.user.setUsername(config.bot_name)
    bot.user.setActivity(config.activity)
})

bot.on("message", (message) => {
    if(!message.content.startsWith(config.prefix) || message.author.bot) return
    const args = message.content.slice(config.prefix.length).split(/ +/)
    const command = getCommandName(args.shift().toLowerCase(), commandAliases)
    if(!bot.commands.has(command)) return
    if(bot.commands.get(command).channels && !bot.commands.get(command).channels.includes(message.channel.id)) return // wrong channel
    if(adminCommands.includes(command) && !config.admins.includes(message.author.id)) return
    try {
        bot.commands.get(command).execute(message, args, bot)
    } catch(err) {
        utils.log(`main: error executing a command. ${err.message}`, "error")
        message.reply(utils.getString(message.member, "commandError"))
    }
})

bot.login(process.env.BOT_TOKEN)