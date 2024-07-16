import { DataTypes } from "sequelize";
import dbManager from "../utils/dbManager.js";


const sequelize = dbManager.getSequelize();

const Case = sequelize.define('Case', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
    },
    public: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    // add notes
    // add court id - TODO
    // add Judge id - TODO
    // add Document to Case table ? - TODO
    // add event to Case Table ? - TODO
    // add Stakeholder to Case Table ? - TODO
});

class CaseModel {

}

const caseModel = new CaseModel();
export default caseModel;