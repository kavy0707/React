var bcrypt = require('bcryptjs');           // it use forpassword securing
var jwt = require('jsonwebtoken');         // it given tocken to every user so user easily identify with his tocken from npm jsonwebtocken
var jwtstr = "kavy0707@" //for above

function fetchuser(req, res, next) {
    // auth-token is given input in when we call api header 
    const tk = req.header('auth-token')
    if (!tk) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
    try {
        const data = jwt.verify(tk, jwtstr)
        req.user = data.user
        next();
    } catch (error) {
        console.error(error.message)
    }

}

module.exports = fetchuser;