const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: '<PASSWORD>',
        database: 'dindin',
        ssl: { rejectUnauthorized: false}
    }
});

module.exports = knex;

