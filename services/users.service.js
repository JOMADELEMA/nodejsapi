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