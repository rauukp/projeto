const express = require('express')
const routes = express()

routes.get('/', async (req,res) => {
    try {
        const allUsers = await knex('usuarios');
        return res.json(allUsers);
    } catch (error) {
        return res.status(500).json({ mensagem: 'erro no servidor' })
    }
})

module.exports = {
    routes
}