// We Require discord so we can interact with the API
const discord = require('discord.js'); // We add Semi Colons to close off the statement. not closing the statement may cause issues in the future
const InitateServer = require('./backend')

// Statement for commands and Events
const { registerCommands, registerEvents} = require('./utils/registry')

const { TOKEN, OWNERS} = require("../config/bot.json");


const client = new discord.Client({
    ws: { intents: discord.Intents.ALL }
});
// here we use client to use EventEmitter


client.once('ready', () => {
    console.log(`Loggged in as ${client.user.tag}`)
    client.user.setPresence({ activity: { name: '!', type: 'DND'} })
});

(async () => {
    client.login(TOKEN)
    InitateServer(client);
    console.log('Bot is Starting Up!')
    client.commands = new discord.Collection();

    await registerEvents(client, '../eventHandlers');
    await registerCommands(client, '../commands');
})();