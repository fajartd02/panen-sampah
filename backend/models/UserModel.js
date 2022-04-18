import { Sequelize } from "sequelize";
import db from "../config/Database.js";
const { DataTypes } = Sequelize;

export const Users = db.define('users', {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    refresh_token: {
        type: DataTypes.TEXT
    },
    money: {
        type: DataTypes.DECIMAL
    },
    emas: {
        type: DataTypes.DECIMAL
    }
}, {
    freezeTableName: true
});