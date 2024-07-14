import { Sequelize, DataTypes } from 'sequelize';
import Config from '../config.js';

class DBManager {
    constructor() {
        this.sequelize = new Sequelize(Config.DB_NAME, Config.DB_USER, Config.DB_PASSWORD, {
          host: 'localhost',
          dialect: 'postgres'
        });
    }

    getSequelize() {
        return this.sequelize;
    }
}

const dbManager = new DBManager();
export default dbManager;