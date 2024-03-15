const jsonWebToken = require("jsonwebtoken");
const JWT_SECRECT = "holis"; // esto lo debes tener los .env
/**
 * Debe pasar el objeto del usuario
 * @param {*} user 
 */

const tokenSing = async(user) => {
    const sign = await jsonWebToken.sign(
        {
            _id: user._id,
            role: user.role
        },
        JWT_SECRECT, {
            expiresIn: "2h"
        }
    );
    return sign;
}

const verifyToken = async( tokenJwt ) => {
    try{
        return jsonWebToken.verify(tokenJwt, JWT_SECRECT);
    }
    catch( error ){
        throw new Error(error);
    }
}

module.exports = {
    tokenSing, 
    verifyToken
}