const { readdir } = require('fs/promises');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, token } = require('../config.json');


module.exports = (async () => {
    const commandFiles = await readdir('./commands')
    const commands = commandFiles.map(f => require(`../commands/${f}`).data.toJSON())

    const rest = new REST({ version: '9' }).setToken(token);

    try {
        console.log('[DEPLOY COMMANDS] Регистрация команд запущена.');

        await rest.put(
            Routes.applicationGuildCommands(clientId, '993543814633508957'),
            { body: commands },
        );

        console.log('[DEPLOY COMMANDS] Команды успешно зарегистрированы.');
    } catch (er) {
        console.error(er)
    };
})();