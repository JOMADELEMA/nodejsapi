const express = require("express"); //importación de Express
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express(); //creación de la app express

/*app.use("/test", (req, res) => {  //ruta de prueba 
    console.log("received request");
    res.status(200).send("Success"); //la respuesta al navegador
});*/
//const bodyParser = require("body-parser");
const usersRoutes = require("./routes/users.route");

//para no usar bodyparser
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Swagger initialization - Start 
const swaggerOption = {
    swaggerDefinition: (swaggerJsdoc.Options = {
        info: {
            title: "my-posts",
            description: "API Documentation",
            contact: {
                name: "Developer",
            },
            servers: ["http://localhost:3000/"],
        },
    }),
    apis: ["index.js", "./routes/*.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOption);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs)); 
//swagger initialization - End



//app.use(bodyParser.json());
app.use("/users", usersRoutes);

app.listen(3000, () => {   //inicialización del puerto de escucha 
    console.log("I am ready to listen you");
});

