const express = require("express");
//instantiate library
const app = express();

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

//start server on port
app.listen(8080);