require('dotenv').config()
const knex = require('../connection')
const jwt = require('jsonwebtoken')

const newUser = async (req,res) => {
    const { nome, email, pass } = req.body;

    if (!nome) {
        return res.status(400).json({"mensagem": "Informe um nome valido para cadastro."})
    } if (!email) {
        return res.status(400).json({"mensagem": "Informe um email valido para cadastro."})
    } if (!pass) {
        return res.status(400).json({"mensagem": "Informe uma senha valida para cadastro."})
    };

    const newU = {
        nome,
        email,
        pass
    }
    try {
        const validUser = await knex('usuarios').insert(newU).returning(['id','nome']);
        return res.status(201).json(validUser);
    } catch (error) {
        return res.status(500).json({ mensagem: 'erro no servidor' })
    }
};

module.exports = {
    newUser
}