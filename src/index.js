
// We Require discord so we can interact with the API
const discord = require('discord.js'); // We add Semi Colons to close off the statement. not closing the statement may cause issues in the future
// Statement for commands and Events
const initiateServer = require("./backend");
//Initation of the Backend Files
const { registerCommands, registerEvents} = require('./discord/utils/registry')
const { TOKEN, OWNERS} = require("../config/bot.json");
const { query } = require("express");

const client = new discord.Client({
    ws: { intents: discord.Intents.ALL }
});
// here we use client to use EventEmitter
// Initate The server here since its makes loading up the GUI quicker

client.once('ready', () => {
    console.log(`Loggged in as ${client.user.tag}`)
    client.user.setPresence({ activity: { name: '!', type: 'DND'} })
});
// test
(async () => {
    client.login(TOKEN);
    initiateServer(client);
    console.log('Bot is Starting Up!')
    client.commands = new discord.Collection();
    await registerEvents(client, '../eventHandlers');
    await registerCommands(client, '../commands');
})();
