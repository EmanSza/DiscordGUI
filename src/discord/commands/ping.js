const PREFIX = require('../../../config/bot.json');
const express = require("express");
const app = express();

module.exports = {
    name: "ping",
    aliases: [],
    description: "",
    usage: `\`${PREFIX}\``,
    examples: `\`${PREFIX}\``,
    perms: [],
    execute: async function(client, message, args) {
        module.exports.payload = {
            data: "ShitHere",
          }
        const MessageE = module.exports.payload.data
        message.channel.send(MessageE)
    }
}