class ErrorHandler {
    handleError(res, error) {
        if(typeof(error) === "CustomError") {
            return res.status(error.status).json({
                success: false,
                msg: error.msg
            });
        }
        res.status(500).json({
            success: false,
            msg: "Internal Server Error"
        })
    }
}

const errorHandler = new ErrorHandler();
export default errorHandler;