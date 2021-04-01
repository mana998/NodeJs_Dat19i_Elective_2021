const express = require("express");
const app = express();

app.use(express.json());

//get cat.json
const cat = require("./cat.json");

app.get("/cat", (req, res) => {
    res.send(cat);
})

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

//second argument takes a callback that takes an error as an argument
app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080);
});