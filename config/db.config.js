const { createPool } = require("mysql"); //inicialización de uso de mysql siempre agregar npm install --save mysql
/** Connection pool creation - START */
const db = createPool({  //agregar credenciales de base de datos
  port: 3306,
  host: "localhost",
  user: "jomadelema",
  password: "8356.JOMA",
  database: "heroku_12f1937794459fe",
  connectionLimit: 10,
});
/** Connection pool creation - END */

module.exports = db;