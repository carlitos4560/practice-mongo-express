
const express = require('express');
const { setUser, getUser, getUserAll } = require('../controllers/user');
const routes = express.Router();
// console.log("llegamos a la ruta de usuarios ");
routes.get('/user/all', getUserAll);
routes.get('/user/:id', getUser);
routes.post('/user', setUser);

module.exports = routes;