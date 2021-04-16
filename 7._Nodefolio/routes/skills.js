const router = require("express").Router();

//depending on parameters, modified array will be returned, but original one must remain unchanged
const skillsArr = ["Java", "Java Spring", "JavaScript", "React", "Node", "HTML", "CSS", "MySQL", "Perl", "C", "Pascal", "PHP", "Python", "Git", "CVS", "AWS", "Docker", "Jenkins", "MongoDB", "Neo4j" ];

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
