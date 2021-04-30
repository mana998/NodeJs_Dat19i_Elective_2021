const router = require("express").Router();

class Project {
    constructor (title, description, gitURL, deployURL, img, tags) {
        this.title = title;
        this.gitURL = gitURL;
        this.deployURL = deployURL;
        this.description = description;
        this.img = img;
        this.tags = tags;
    }
}

//depending on parameters, modified array will be returned, but original one must remain unchanged
const projectsArr = [
    new Project(
        "Memory SpriteSheet Game", 
        `Testing Game Loop with using SpriteSheets to create simple game. At the beginning player chooses difficulty
        which sets amount of different objects to collect. Then at the beginning of each turn, order is shown for certain period 
        of time, after which player needs to collect randomly placed objects in the correct order. After each sublevel, amout of 
        objects increases and after each level, time to remember objects decreases.`,
        "https://github.com/mana998/Creative_Code_Dat19i_Elective_2021/tree/main/2._Game_Loop/2._SpriteSheet", 
        "https://mana998.github.io/2._SpriteSheet/", 
        "spritesheet_game",
        ["html", "css", "javascript", "git", "github"]
    ),
    new Project(
        "Nordic Motorhome", 
        `2nd semester exam group project using MySQL database, Java Spring Boot and Thymeleaf templates.
        Developed using Unified Processes. Management system for company renting motorhomes. Stores information about customers, employees, 
        motorhomes and agreements. Contains basic CRUD operations together with Spring Security log in system, 
        which supports 2 types of employees. Regular employee doesn't have access to employees tab, while admin 
        has access to everything. Login credentials are provided in GitHub ReadMe file.`,
        "https://github.com/mana998/NordicMotorhome/tree/heroku-test", 
        "https://nordic-motorhome.herokuapp.com/", 
        "nordic_motorhome",
        ["html", "css", "javascript", "spring boot", "thymeleaf", "mysql", "git", "github", "up", "spring security"]
    ),
    new Project(
        "Binary Clock", 
        `Simple canvas application to show real-time in binary separated into hours, minutes and seconds. 
    Size can be adjusted by pressing <b>+</b> or <b>-</b> key on a keyboard.`,
        "https://github.com/mana998/Creative_Code_Dat19i_Elective_2021/tree/main/1._Canvas_Basics/Clock", 
        "https://mana998.github.io/", 
        "binary_clock",
        ["html", "css", "javascript", "git", "github"]
    ),
    new Project(
        "Onward Delivery", 
        `3rd semester exam group project. Using React to create design and fetch information from Prismic in 2 
        different languages. Currently Primic account isn't available anymore so website is without most of the text. 
        Developed using Scrum framework together with XP. Following requirements given by the client together with 
        their prototype. Website made fully responsive.`,
        "https://github.com/basnow28/onward-delivery", 
        "https://onward-delivery.herokuapp.com/dk", 
        "onward_delivery",
        ["html", "css", "javascript", "react", "scrum", "git", "github"]
    ),
    new Project(
        "Node Documentation", 
        `Simple application which uses express to serve html pages, showcasing basic node and javascript documentation. 
        Made as a part of Node.js course, documenting all the knowledge learnt so far. Simple design where 
        focus is more on the content.`,
        "https://github.com/mana998/NodeJs_Dat19i_Elective_2021/tree/main/6._Mandatory_Assignment", 
        "/", 
        "documentation",
        ["html", "css", "javascript", "git", "github", "nodejs", "jquery"]
    ),
    new Project(
        "Portfolio", 
        `Portfolio made mostly using Server Side Rendering, together with few jquery commands. 
        Contains skills, projects and contact form which sends an email using nodemailer. You are currently 
        viewing this portfolio`,
        "https://github.com/mana998/NodeJs_Dat19i_Elective_2021/tree/main/7._Nodefolio", 
        "", 
        "nodefolio",
        ["html", "css", "javascript", "git", "github", "nodejs", "jquery"]
    ),
];

router.get("/api/projects", (req, res) => {
    let projects = [...projectsArr];
    let filter = req.query.filter;
    let max = req.query.max;
    if (filter) {
        const filteredProjects = projects.filter(project => 
            project.tags.includes(filter)
        )
        projects = filteredProjects;
    }
    if (max && projects.length > max){
        projects.length = max;
    }
    res.send({projects});
})

module.exports = {
    router: router
}
