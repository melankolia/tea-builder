const express = require("express");

// Init Router & App
const app = express();

// Init Body Parser
app.use(express.json());

// Init Router
app.use('/', (req, res, next) => {
    return res.status(200).send({
        message: "OK",
        result: "Hello World"
    });
});

// Init Server
app.listen(8080, () => console.log(`Running on Port 8080`));