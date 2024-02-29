require('dotenv').config()
const knex = require('../connection')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');

const newUser = async (req,res) => {
    const { nome, email, senha } = req.body;

    if (!nome) {
        return res.status(400).json({"mensagem": "Informe um nome valido para cadastro."})
    } if (!email) {
        return res.status(400).json({"mensagem": "Informe um email valido para cadastro."})
    } if (!senha) {
        return res.status(400).json({"mensagem": "Informe uma senha valida para cadastro."})
    };

    const criptoPass = await bcrypt.hash(senha, 10);

    const newU = {
        nome,
        email,
        criptoPass
    }
    try {
        const validUser = await knex('usuarios').insert(newU).returning(['id','nome']);
        return res.status(201).json(validUser);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ mensagem: 'erro no servidor' })
    }
};

module.exports = {
    newUser
}