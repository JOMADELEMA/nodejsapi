const db = require("../config/db.config");

exports.register = (data, callback) => {
    db.query(
        'INSERT INTO users (firstName, lastName, emailId, password) VALUES (?, ?, ?, ?)',
        [data.firstName, data.lastName, data.email, data.password],
        (error, results, fields) => {
            if (error){
                return callback(error);
            }
            return callback(null, "registration successful");
        }
    );
};

exports.login = (data, callback) => {
    db.query(
        'SELECT id FROM users WHERE emailId = ? AND password = ?',
        [data.email, data.password],
        (error, results, fields)=>{
            if(error){
                return callback(error);
            }
            if (results.length > 0){
                return callback(null, "Login Success");
            } else {
                return callback("Invalid credentials");
            }
        }
    );
};