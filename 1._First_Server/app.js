const express = require("express");
//instantiate library
const app = express();
// const app = require("express")();

class Member {
    constructor(id, name, username, age) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.age = age;
    }
}

//array of member objects
let members = [new Member(1, "Emilie", "Stray Mylse", 20), new Member(2, "Salia", "Yukina Peace", 20), new Member(3, "Estelle", "Inoel", 18), new Member (4, "Yuki", "ShadedStar", 26)];

//get all
app.get("/members", (req, res) => {
    res.send(members);
});

//get by id
app.get("/members/:memberId", (req, res) => {
    let id = req.params.memberId;
    let pos;
    members.forEach( member => {if (member.id == id){
        pos = members.indexOf(member);
    }});
    res.send(members[pos] ? members[pos] : {message: `No member found with id ${id}`});
});




/*
//event handler, route handler, route
//endpoint, callback
app.get("/", (req, res) => {
    res.send({});
})

//new route called welcome that shows an HTML header tag that says Welcome
app.get("/welcome", (req, res) => {
    res.send("<h1>Welcome</h1>");
})

//create a new route on the endpoint me that returns a json object that represents you
app.get("/me", (req, res) => {
    res.send({name:"Marianna",age:"22"});
})
*/

//start server on port
app.listen(8080);