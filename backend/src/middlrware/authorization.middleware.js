const AUTHORIZATION_TABLE = {
    "type-admin": ,
    "type-manager": ,
    "type-lawyer"; ,
    "type-judge": ,
    "visitor": ,
}

authotizationMiddleware(req, res, next) {
    try {
        // Todo extract type from cookies
        const userType = 
        
        req.userType = userType;
        
        // extraxct request url
        for(const perm of AUTHORIZATION_TABLE) {
            if(url.contains(perm) && AUTHORIZATION_TABLE[perm] == userType) {
                return next();
            }
        }
        
        // throw authorization error
        throw 
    }
    catch(error) {
        errorHandler.handleError(res, error);
    }
}