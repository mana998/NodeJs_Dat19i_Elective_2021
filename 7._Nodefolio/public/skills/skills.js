function generateSkill(name){
    return(
    `<div class="flex-item">
    <a class="skill-link" href="/projects?filter=${name.toLowerCase()}">
        <img class="skill-img" src="/skills/img/${name.toLowerCase()}.png">
        <h2 class="skill-name">${name}</h2>
    </a>
</div>`);
}

(async function renderSkill() {
    const response = await fetch("/api/skills");
    const result = await response.json();
    console.log(result);
    if (result.skills) {
        result.skills.map(skill => {
            console.log(skill);
            $(".flex-container").append(generateSkill(skill));
        });
    }
})();
