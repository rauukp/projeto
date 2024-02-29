const express = require('express')
const knex = require('./connection');
const { newUser } = require('./controllers/controllers');
const routes = express()

routes.get('/', async (req,res) => {
    try {
        const allUsers = await knex('usuarios');
        return res.json(allUsers);
    } catch (error) {
        return res.status(500).json({ mensagem: 'erro no servidor' })
    }
})

routes.post('/user', newUser)

module.exports = {
    routes
}