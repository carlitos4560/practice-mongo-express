
const usuario = {
    password: "123123",
    userName: "carlos"
}


const login = ( req, res ) => {
    const { userName, password } = req.body;
    console.log(userName, password);
    return res.send("se tiene los datos de autentificacion");
}

module.exports = {
    login
};