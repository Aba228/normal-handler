const {Client, Collection, Intents} = require('discord.js'),
    fs = require("fs")
config = require('./config.json');
const intents = new Intents(config.cfg.intents);
const bot = new Client({intents});
bot.commands = new Collection()
bot.commandsArray = []

require('./handlers/events.js').init(bot)
require('./handlers/deploy-commands')

bot.login(config.token);
