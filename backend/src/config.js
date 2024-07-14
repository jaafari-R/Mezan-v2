import { config } from "dotenv";
config();

class Config {
    static PORT = process.env.PORT || 4000;
    static DB_NAME = process.env.DB_NAME || 'postgres';
    static DB_USER = process.env.DB_USER || 'postgres';
    static DB_PASSWORD = process.env.PASSWORD || 'postgres';
}

export default Config;