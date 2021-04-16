function generateProject(project){
    return(
    `<article class="grid-container">
    <img class="grid-item picture project-img" src="/projects/img/${project.img}.png">
    <div class="grid-item description">
        <h2 class="project-name">${project.title}</h2>
        <a href="${project.gitURL}" target="_blank" class="icon-link"><img class="mini-icon" src="/projects/img/placeholder.png"></a>
        <a href="${project.deployURL}" target="_blank" class="icon-link"><img class="mini-icon" src="/projects/img/placeholder.png"></a>
        <p>${project.description}</p>
    </div>
</article>`);
}

async function renderProjects(max, append) {
    append = append || "main";
    let filter = window.location.search;
    const filterRegex = /\?filter=(.*[^&=])/;
    filter = (filter.replace(filterRegex, "$1"));
    let fetchString = "/api/projects";
    if (filter) fetchString += `?filter=${filter}`;
    if (max) fetchString += filter ? `&max=${max}` : `?max=${max}`;
    const response = await fetch(fetchString);
    const result = await response.json();
    if (result.projects) {
        result.projects.map(project => {
            $(append).append(generateProject(project));
        });
    }
};

//render projects automatically if on projects page
if (window.location.pathname.match("projects")) {
    renderProjects();
}
