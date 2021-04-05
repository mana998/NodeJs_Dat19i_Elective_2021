const express = require("express");
const app = express();
const fetch = require('node-fetch');
app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/welcome/welcome.html");
})

app.get("/dragons", (req, res) => {
    res.sendFile(__dirname + "/public/dragons/dragons.html");
})

app.get("/crypto", (req, res) => {
    res.sendFile(__dirname + "/public/crypto/crypto.html");
})

app.get("/safeport", (req, res) => {
    res.send({message: "You are safe here"});
})

app.get("/dangerport", (req, res) => {
    res.redirect("/safeport");
})

app.get("/proxy", (req, res) => {
    fetch('https://google.com/')
        .then(res => res.text())
        .then(body => res.send(body))
        .catch(res => {
            console.log("error",res);
        });
})

app.get("/potato", (req, res) => {
    //if querystring contains value sppud then return petite potato otherwise adult potato
    console.log(req.query.q);
    if (req.query.spud) {
        //return else 29 could return too
        return res.send({potato: "petite potato"}) 
    }
    return res.send({potato:"adult potato"});
})

//process.env.PORT = 5000;
console.log(`Your port is ${process.env.PORT}`);
const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", Number(PORT));
});

//assign port automatically
/*const server = app.listen((error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});*/