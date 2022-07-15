const fs = require('fs')

/**
 * @param не знаю что здесь писать, я орк
*/
module.exports.init = async (client) => {
    console.log(`[HANDLER] Event handler started!`)
    fs.readdirSync(`./events`).filter(s => s.endsWith('.js')).forEach(file => {
        const evt = require(`../events/${file}`)
        console.log(`[EVENTS] ${evt.name} загружен!`)
        client.on(evt.name, (...args) => evt.execute(client, ...args))
    })
}