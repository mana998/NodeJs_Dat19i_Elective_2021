const express = require("express");
const app = express();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let now;

app.get("/time", (req, res) => {
    now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    res.send({time : `${hour}:${minute}:${second}`});
})

app.get("/day", (req, res) => {
    now = new Date();
    let date = now.getDate();
    let day = now.getDay().toString();
    res.send({day : `${date}. ${days[day]}`});
})

app.get("/month", (req, res) => {
    now = new Date();
    let month = now.getMonth();
    res.send({month : months[month]});
})

app.listen(8080);