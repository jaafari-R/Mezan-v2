import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import Config from "../config.js"

class AuthUtils {
    async hashPassword(password) {
        return await bcrypt(password, Config.SALT_ROUNDS);
    }
    
    async verifyHashedPassword(password, hashedPassword) {
        return await bycrypt.compare(password, hashedPassword);
    }
    
    createJwt(payload) {
        return await jwt.sign(
            payload, 
            Config.JWT_SECRET,
            { expiresIn: Config.JWT_EXPIRE_TIME 
            }
        );
    }
    
    verifyJwt(token) {
        const payload = jwt.verify(token, Config.JWT_SECRET);
        return payload;
    }
}