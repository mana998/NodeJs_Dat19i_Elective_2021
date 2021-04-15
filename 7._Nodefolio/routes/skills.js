const router = require("express").Router();

const skills = ["Java", "Java Spring", "JavaScript", "React", "Node", "HTML", "CSS", "MySQL", "Perl", "C", "Pascal", "PHP", "Python", "Git", "CVS", "AWS", "Docker", "Jenkins", "MongoDB", "Neo4j" ];

router.get("/api/skills", (req, res) => {
    res.send({skills});
})

module.exports = {
    router: router
}
