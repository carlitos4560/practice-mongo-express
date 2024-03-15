let Persona = require('../data/Persona');

const getUserService = (id) => {
    const persona = Persona.find(( persona ) => (
        persona.id === parseInt(id)
    ));
    return persona;
}

const setUserService = ( user ) => {
    try{
        Persona = [...Persona, user];
        return user;
    }
    catch(error){
        console.log(new Error(error));
    }
}

const getAlluser = () => {
    return Persona;
}

module.exports =  {
    getUserService,
    getAlluser,
    setUserService
};