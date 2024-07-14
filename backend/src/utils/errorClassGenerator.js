class ErrorClassGenerator {
    static createError(status, msg) {
        return class {
            static status = status;
            static msg = msg;
        }
    }
}

export default ErrorClassGenerator;