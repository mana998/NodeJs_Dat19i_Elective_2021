const express = require("express");
const app = express();

app.use(express.json());
//allow to pass form data
app.use(express.urlencoded({ extended: true}));

app.use(express.static(__dirname + '/public'));

const projectsRouter = require("./routes/projects.js");
const skillsRouter = require("./routes/skills.js");
const contactRouter = require("./routes/contact.js");

app.use(projectsRouter.router);
app.use(skillsRouter.router);
app.use(contactRouter.router);

const fs = require('fs');

const header = fs.readFileSync(__dirname + '/public/header/header.html', 'utf8');
const footer = fs.readFileSync(__dirname + '/public/footer/footer.html', 'utf8');

const frontpage = fs.readFileSync(__dirname + '/public/frontpage/frontpage.html', 'utf8');
const projects = fs.readFileSync(__dirname + '/public/projects/projects.html', 'utf8');
const skills = fs.readFileSync(__dirname + '/public/skills/skills.html', 'utf8');
const contact = fs.readFileSync(__dirname + '/public/contact/contact.html', 'utf8');

app.get("/", (req, res) => {
    res.send(header + frontpage + footer);
})

app.get("/skills", (req, res) => {
    res.send(header + skills + footer);
})

app.get("/projects", (req, res) => {
    res.send(header + projects + footer);
})

app.get("/contact", (req, res) => {
    res.send(header + contact + footer);
})


const server = app.listen(process.env.PORT || 8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});