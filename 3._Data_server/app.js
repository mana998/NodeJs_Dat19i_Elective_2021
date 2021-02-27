const express = require("express");
const app = express();

app.use(express.json());

app.get("/querystring", (req, res) => {
    res.send({"key" : req.query.key});
})

app.get("/pathvariable/:message/:title", (req, res) => {
    res.send({
        message: req.params.message, 
        title: req.params.title
    });
});

app.post("/user", (req, res) => {
    res.send({
        body: req.body.key
    })
})

app.listen(8080);