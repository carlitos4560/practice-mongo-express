const {getUserService, getAlluser, setUserService} = require('../services/persona');

const getUser = ( req, res ) => {
    const { id } = req.params;
    persona = getUserService( id );
    res.send(persona);
}

const setUser = ( req, res ) => {
    const { name, lasName, country } = req.body;
    const id = new Date().getTime();
    const user = { id, name, lasName, country };
    const persona = setUserService(user);
    // Persona = [...Persona, user];
    return res.status(201).send( persona );
}

const getUserAll = ( req, res ) => {
    const Persona = getAlluser();
    if(Persona.length == 0){
        return res.send([]);
    }
    return res.send(Persona);
} 

module.exports = {
    getUser,
    setUser,
    getUserAll
};