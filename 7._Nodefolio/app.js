const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/public'));

const projectsRouter = require("./routes/projects.js");

app.use(projectsRouter.router);

const fs = require('fs');

const header = fs.readFileSync(__dirname + '/public/header/header.html', 'utf8');
const footer = fs.readFileSync(__dirname + '/public/footer/footer.html', 'utf8');

const frontpage = fs.readFileSync(__dirname + '/public/frontpage/frontpage.html', 'utf8');
let projects = fs.readFileSync(__dirname + '/public/projects/projects.html', 'utf8');

//get start of the skills container
let skills = fs.readFileSync(__dirname + '/public/skills/skills.html', 'utf8');
//get function for generating skill html
const generateSkill = require(__dirname + '/public//skills/skills.js');
//array of skills
let skillsArr = ["Java", "Java Spring", "JavaScript", "React", "Node", "HTML", "CSS", "MySQL", "Perl", "C", "Pascal", "PHP", "Python", "Git", "CVS", "AWS", "Docker", "Jenkins", "MongoDB", "Neo4j" ];
//concatenate skills
for (let skill of skillsArr) {
    skills += generateSkill(skill);
} //add closing of container at app.get /skills

app.get("/", (req, res) => {
    res.send(header + frontpage + footer);
})

app.get("/skills", (req, res) => {
    //div to close after all skills have been added
    res.send(header + skills + "</div>" + footer);
})

app.get("/projects", (req, res) => {
    res.send(header + projects + footer);
})

app.get("/contact", (req, res) => {
    res.send(header + frontpage + footer);
})

app.get("/about", (req, res) => {
    res.send(header + frontpage + footer);
})




const server = app.listen(process.env.PORT || 8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});