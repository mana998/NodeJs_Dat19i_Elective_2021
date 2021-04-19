const router = require("express").Router();

//depending on parameters, modified array will be returned, but original one must remain unchanged
const skillsArr = ["Java", "Java Spring", "JavaScript", "React", "NodeJS", "HTML", "CSS", "MySQL", "Perl", "C", "PHP", "Python", "Git", "GitHub", "CVS", "AWS", "Docker", "Jenkins", "MongoDB", "Neo4j" ];

router.get("/api/skills", (req, res) => {
    let skills = [...skillsArr];
    let max = req.query.max;
    if (max && skills.length > max){
        skills.length = max;
    }
    res.send({skills});
})

module.exports = {
    router: router
}
