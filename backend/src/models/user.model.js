import { DataTypes } from "sequelize";
import dbManager from "../utils/dbManager.js";

const sequelize = dbManager.getSequelize();

const User = sequelize.define('User', {
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
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

class UserModel {

}

const userModel = new UserModel();
export default userModel;