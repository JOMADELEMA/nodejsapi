const usersController = require("../controllers/users.controller");

var express = require("express");

var router =  express.Router();

router.post("/register", usersController.register);
//router.post("/login", usersController.login); está oculto por que no se ha programado

module.exports = router;