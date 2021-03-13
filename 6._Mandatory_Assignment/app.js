const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.get("/http", (req, res) => {
    res.sendFile(__dirname + "/public/http.html");
})

app.get("/json", (req, res) => {
    res.sendFile(__dirname + "/public/json.html");
})

app.get("/javascript", (req, res) => {
    res.sendFile(__dirname + "/public/javascript.html");
})


app.get("/dangerport", (req, res) => {
    res.redirect("/safeport");
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", Number(PORT));
});