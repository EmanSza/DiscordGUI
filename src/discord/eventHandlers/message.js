const PREFIX = require("../../../config/bot.json").PREFIX;
const { Collection } = require("discord.js")
const cooldowns = new Collection();

module.exports = async (client, message) => {
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;

    if (!message.content.startsWith(PREFIX)) return;

    let msgargs = message.content.substring(message.content.indexOf(PREFIX)+PREFIX.length).split(new RegExp(/\s+/));
    let cmdName = msgargs.shift().toLowerCase();

    const command = await client.commands.get(cmdName) || 
        client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdName));

    if (!command) return;
    if (command.perms) {
        if (!message.member.hasPermission(command.perms)) return
    }

    command.execute(client, message, msgargs);
};