const express = require('express');
const { login } = require('../controllers/Auth');
const { encrypt, compare  } = require("../utils/handlePassword");
const routes = express.Router();
const { tokenSing, verifyToken } = require("../utils/handleJwt");

routes.post("/auth", async()=>{

});

routes.post("/auth/register", async( req, res ) => {
    const userLogin = req.body;
    const password = await encrypt( userLogin.password );
    const body = { ...userLogin, password };

    // const dataUser = {};
    // dataUser.set("password", undefined, { strict: false });
    
    // const data = {
    //     token: await tokenSign(dataUser),
    //     user: dataUser
    // }

    res.send(body);
})

module.exports = routes;