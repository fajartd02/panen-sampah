import { Sequelize } from 'sequelize';

const db = new Sequelize('panen_sampah', 'root', process.env.DB_PASSWORD, {
    "host": process.env.DB_HOST,
    "dialect": "mysql"
});

export default db;