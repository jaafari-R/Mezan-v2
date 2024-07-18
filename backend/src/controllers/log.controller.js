import errorHandler from "../utils/errorHandler.js";

class LogController {
    getAll(req, res) {
        try {
            
        }
        catch(error) {
            errorHandler.handleError(res, error);
        }
    }
}

const logController = new LogController();
export default LogController;