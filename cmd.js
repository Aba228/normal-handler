const {readdir} = require('fs/promises')

/**
 * @param не знаю что здесь писать, я орк
*/
module.exports.init = async (client) => {
    console.log(`[HANDLER] Commands handler started!`)

    // fs.readdirSync(`./commands`).filter(s => s.endsWith('.js')).forEach(file => {
    //     const evt = require(`../commands/${file}`)
    //     console.log(`[Commands] ${evt.name} загружен!`)
    //     client.on(evt.name, evt.execute.bind(null, client))
    // })
}