import { DataTypes } from "sequelize";
import dbManager from "../utils/dbManager";


const sequelize = dbManager.getSequelize();

const Auth = sequelize.define('UserAuth', {
    idNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

class AuthModel {

}

const authModel = new AuthModel();
export default authModel;