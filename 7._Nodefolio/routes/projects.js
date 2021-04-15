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

let projects = [
    new Project(
        "Binary Clock", 
        `Simple canvas application to show real-time in binary separated into hours, minutes and seconds. 
    Size can be adjusted by pressing <b>+</b> or <b>-</b> key on a keyboard.`,
        "https://github.com/mana998/Creative_Code_Dat19i_Elective_2021/tree/main/1._Canvas_Basics/Clock", 
        "https://mana998.github.io/", 
        "placeholder",
        ["html", "css", "jscript"]
    ),
    new Project(
        "Binary Clock2", 
        `Simple canvas application to show real-time in binary separated into hours, minutes and seconds. 
    Size can be adjusted by pressing <b>+</b> or <b>-</b> key on a keyboard.`,
        "https://github.com/mana998/Creative_Code_Dat19i_Elective_2021/tree/main/1._Canvas_Basics/Clock", 
        "https://mana998.github.io/", 
        "placeholder",
        ["css", "jscript"]
    ),
    new Project(
        "Binary Clock3", 
        `Simple canvas application to show real-time in binary separated into hours, minutes and seconds. 
    Size can be adjusted by pressing <b>+</b> or <b>-</b> key on a keyboard.`,
        "https://github.com/mana998/Creative_Code_Dat19i_Elective_2021/tree/main/1._Canvas_Basics/Clock", 
        "https://mana998.github.io/", 
        "placeholder",
        ["css", "jscript"]
    ),
    new Project(
        "Binary Clock4", 
        `Simple canvas application to show real-time in binary separated into hours, minutes and seconds. 
    Size can be adjusted by pressing <b>+</b> or <b>-</b> key on a keyboard.`,
        "https://github.com/mana998/Creative_Code_Dat19i_Elective_2021/tree/main/1._Canvas_Basics/Clock", 
        "https://mana998.github.io/", 
        "placeholder",
        ["html", "css", "jscript"]
    ),
];

router.get("/api/projects", (req, res) => {
    let filter = req.query.filter;
    if (filter) {
        const filteredProjects = projects.filter(project => 
            project.tags.includes(filter)
        )
        projects = filteredProjects;
    }
    res.send({projects});
})

module.exports = {
    router: router
}
