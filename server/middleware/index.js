const jwt = require("jsonwebtoken");

exports.isUserAuthorized = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];

        let decodedData;

        if (token) {      
            decodedData = jwt.verify(token, process.env.SECRET_KEY);
        
            req.user = decodedData;
        } 
    } catch (error) {
        console.log(error)
    }
    next();
}

exports.isAdminAuthorized = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];

        let decodedData;

        if (token) {      
            decodedData = jwt.verify(token, process.env.SECRET_KEY);
        
            req.admin = decodedData;
        } 
    } catch (error) {
        console.log(error)
    }
    next();
}