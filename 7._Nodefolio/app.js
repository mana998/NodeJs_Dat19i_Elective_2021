const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/public'));

const projectsRouter = require("./routes/projects.js");
const skillsRouter = require("./routes/skills.js");

app.use(projectsRouter.router);
app.use(skillsRouter.router);

const fs = require('fs');

const header = fs.readFileSync(__dirname + '/public/header/header.html', 'utf8');
const footer = fs.readFileSync(__dirname + '/public/footer/footer.html', 'utf8');

const frontpage = fs.readFileSync(__dirname + '/public/frontpage/frontpage.html', 'utf8');
const projects = fs.readFileSync(__dirname + '/public/projects/projects.html', 'utf8');
const skills = fs.readFileSync(__dirname + '/public/skills/skills.html', 'utf8');


app.get("/", (req, res) => {
    res.send(header + frontpage + footer);
})

app.get("/skills", (req, res) => {
    //div to close after all skills have been added
    res.send(header + skills + footer);
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