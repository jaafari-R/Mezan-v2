import { DataTypes } from "sequelize";
import dbManager from "../utils/dbManager";

const sequelize = dbManager.getSequelize();

const Log = sequelize.define('Log', {
    type: {
        // TODO change to enum
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

class LogModel {

}