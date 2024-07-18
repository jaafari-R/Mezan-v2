import logModel from "../models/log.model.js";
import errorHandler from "../utils/errorHandler.js";

class LogController {
    async getAll(req, res) {
        try {
            const allLogs = await logModel.getAll();
            res.json(allLogs);
        }
        catch(error) {
            errorHandler.handleError(res, error);
        }
    }
}

const logController = new LogController();
export default LogController;