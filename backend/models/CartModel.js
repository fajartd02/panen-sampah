import { Sequelize } from "sequelize";
import db from "../config/Database.js";
const { DataTypes } = Sequelize;

export const Carts = db.define('carts', {
    buyer_id: {
        type: DataTypes.INTEGER
    },
    plastic: {
        type: DataTypes.DECIMAL
    },
    skincare: {
        type: DataTypes.DECIMAL
    }, 
    kaca: {
        type: DataTypes.DECIMAL
    },
    status: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});