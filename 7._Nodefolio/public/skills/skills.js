function generateSkill(name){
    return(
    `<div class="flex-item">
    <a class="skill-link" href="/projects?filter=${name.toLowerCase()}">
        <img class="skill-img" src="/skills/img/${name.toLowerCase()}.png">
        <h2 class="skill-name">${name}</h2>
    </a>
</div>`);
}

async function renderSkills(max) {
    let fetchString = "/api/skills";
    if (max) fetchString += `?max=${max}`;
    const response = await fetch(fetchString);
    const result = await response.json();
    if (result.skills) {
        result.skills.map(skill => {
            $(".flex-container").append(generateSkill(skill));
        });
    }
};

//render skills automatically if on skills page
if (window.location.pathname.match("skills")) {
    renderSkills();
}