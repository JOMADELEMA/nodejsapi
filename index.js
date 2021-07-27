const express = require("express");

const app = express();

app.use("/test", (req, res) => {
    console.log("received request");
    res.status(200).send("Success 2"); //la respuesta al navegador
});

app.listen(3000, () => {
    console.log("I am ready to listen you");
});

