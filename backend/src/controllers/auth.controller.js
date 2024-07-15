import errorHandler from "../utils/errorHandler.js";

class AuthController {
    register(req, res) {
        const { idNumber, firstName, lastName, password, confirmPassword, email, phoneNumber city, address } = req.body;
        try {
            // validate data
            
            // does user already exist?
            
            // create User
            // create code
            // send code to phone / email
            // go to code page
        }
        catch(error) {
            errorHandler.handleError(res, error);
        }
    }
    
    login(req, res) {
        const { idNumber, password } = req.body;
        try {
            // validate data
            
            // match id with password
            
            // send token
        }
        catch(error) {
            errorHandler.handleError(res, error);
        }
    }
    
    verifyRegister(req, res) {
        const { code } = res.body
        try {
            // check code
            // set user as verified
            // send token
        }
        catch(error) {
            errorHandler.handleError(res, error);
        }
    }
    
    resendCode(req, res) {
        const { idNumber } = req.body;
        try {
            // send code to phone/email
        }
        catch(error) {
            errorHandler.handleError(res, error);
        }
    }
    
    logout(req, res) {
        res.clearCookie("authToken")
        .sendStatus(204);
    }
}