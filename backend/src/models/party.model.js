import { DataTypes } from "sequelize";
import dbManager from "../utils/dbManager.js";

const sequelize = dbManager.getSequelize();

const Party = sequelize.define('Party', {
    // add Case id - TODO
    // add Lawyer id - TODO
    // add Client / stakeholder id - TODO
    type: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

class PartyModel {

}

const partyModel = new PartyModel();
export default partyModel;