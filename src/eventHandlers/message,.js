const { Collection } = require("discord.js")
const { PREFIX } = require('../../config/bot.json')

module.exports = async (client, message) => {
    if (message.author.bot || message,channel.type === "dm") return;

    let msgargs = message.content.slice(PREFIX.length.trim().split(/ +/));
    let cmdName = msgargs.shift().toLowerCase();

    // If the message is ran with the prefix
    if  (!message.content.startsWith(PREFIX)) return;
    // ! means if NOT

    // if the bot is mentioned to return
    if (message.mentions.has(client.user) &&!cmdName) return message.channel.send('my prefix is `\ ${PREFIX} `')

    const command = await client.commands.get(cmdName) || 
    client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdName));

    if (!command) return;
    if (command.perms) {
        if (!message.member.hasPermission(command.perms)) return
    }
    command.execute(client, message, msgargs);
}