import { DataTypes } from "sequelize";
import dbManager from "../utils/dbManager.js";

const sequelize = dbManager.getSequelize();

const Stakeholder = sequelize.define('Stakeholder', {
    idNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
    },
    address: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    phoneNumber: {
        type: DataTypes.STRING,
    }
});

class StakeholderModel {

}

const stakeholderModel = new StakeholderModel();
export default stakeholderModel;