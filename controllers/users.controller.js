const usersService = require("../services/users.service");

exports.register = (req, res, next) => {
    const data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
    };

    usersService.register(data, (error, results) => {
        if(error){
            console.log(error);
            return res.status(400).send({success: 0, data: "Bad request"});
        }
        return res.status(201).send({
            success: 1,
            data: results,
        });
    });
};

exports.login = (req, res, next) => {
    const data = {
        email: req.body.email,
        password: req.body.password,
    };

    usersService.login(data, (error, results) => {
        if(error){
            console.log(error);
            return res.status(400).send({success: 0, data: "Bad request"});
        }
        return res.status(201).send({
            success: 1,
            data: results,
        });
    });
};