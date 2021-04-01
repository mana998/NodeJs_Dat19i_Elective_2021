const express = require("express");
//instantiate library
const app = express();
// const app = require("express")();
app.use(express.json());

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

//get member by id
function getMemberPos(id) {
    for (member of members) {
        if (member.id == id){
            return members.indexOf(member);
        }
    }
}

//get all
app.get("/members", (req, res) => {
    res.send({members : members});
});

//get by id
app.get("/members/:memberId", (req, res) => {
    let id = req.params.memberId;
    let pos = getMemberPos(id);
    res.send(members[pos] ? {member: members[pos]} : {message: `No member found with id ${id}`});
});

//post
app.post("/members", (req, res) => {
    let body = req.body;
    let member = new Member(members.length+1, body.name, body.username, body.age);
    members.push(member);
    console.log(members);
    res.send({messsage: "Member has been added"});
})

//put
app.put("/members/:memberId", (req, res) => {
    let body = req.body;
    let id = req.params.memberId;
    let pos = getMemberPos(id);
    if (pos !== undefined) {;
        let member = members[pos];
        member.name = body.name;
        member.username = body.username;
        member.age = body.age;
        console.log(members);
        res.send({messsage: `Member with id ${id} has been updated`});
    } else {
        res.send({messsage: `Member with id ${id} not found`});
    }
})

app.patch("/members/:memberId", (req, res) => {
    let body = req.body;
    let id = req.params.memberId;
    let pos = getMemberPos(id);
    if (pos !== undefined) {;
        let member = members[pos];
        if (body.name) member.name = body.name;
        if (body.username) member.username = body.username;
        if (body.age) member.age = body.age;
        console.log(members);
        res.send({messsage: `Member with id ${id} has been updated`});
    } else {
        res.send({messsage: `Member with id ${id} not found`});
    }
})

//delete all
app.delete("/members", (req, res) => {
    members.length = 0;
    console.log(members);
    res.send({messsage: `Members were deleted`});
})

//delete by id
app.delete("/members/:memberId", (req, res) => {
    let id = req.params.memberId;
    let pos = getMemberPos(id);
    console.log(pos);
    if (pos !== undefined) {
        members.splice(pos, 1);
        console.log(members);
        res.send({messsage: `Member with id ${id} has been deleted`});
    } else {
        res.send({messsage: `Member with id ${id} not found`});
    }
})

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