const express = require("express"); //importación de Express

const app = express(); //creación de la app express

app.use("/test", (req, res) => {  //ruta de prueba 
    console.log("received request");
    res.status(200).send("Success"); //la respuesta al navegador
});

app.listen(3000, () => {   //inicialización del puerto de escucha 
    console.log("I am ready to listen you");
});

