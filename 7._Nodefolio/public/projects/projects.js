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

(async function renderProjects() {
    let filter = window.location.search;
    const filterRegex = /\?filter=(.*[^&=])/;
    filter = (filter.replace(filterRegex, "$1"));
    const fetchString = filter ? `/api/projects?filter=${filter}` : "/api/projects";
    const response = await fetch(fetchString);
    const result = await response.json();
    if (result.projects) {
        result.projects.map(project => {
            $("main").append(generateProject(project));
        });
    }
})();

