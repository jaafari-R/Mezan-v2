import { config } from "dotenv";
config();

class Config {
    static PORT = process.env.PORT || 4000;
}

export default Config;