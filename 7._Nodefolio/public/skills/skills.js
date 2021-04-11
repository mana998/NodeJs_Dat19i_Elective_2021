const generateSkill = function(name){
    return(
    `<div class="flex-item">
    <a class="skill-link" href="/projects?filter=${name.toLowerCase()}">
        <img class="skill-img" src="/skills/img/${name.toLowerCase()}.png">
        <h2 class="skill-name">${name}</h2>
    </a>
</div>`);
}

//export function for creating skill components to follow SSR
//else it would be CSR after JS loads in the browser
module.exports = generateSkill;

/*let skills = ["Java", "Java Spring", "JavaScript", "React", "Node", "HTML", "CSS", "MySQL", "Perl", "C", "Pascal", "PHP", "Python", "Git", "CVS", "AWS", "Docker", "Jenkins", "MongoDB", "Neo4j" ];

for (let skill of skills) {
    $(".flex-container").append(generateSkill(skill));
}*/