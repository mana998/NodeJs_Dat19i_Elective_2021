class Project {
    constructor (name, linkGit, linkDeploy, description, img, tags) {
        this.name = name;
        this.linkGit = linkGit;
        this.linkDeploy = linkDeploy;
        this.description = description;
        this.img = img;
        this.tags = tags;
    }

    generateProject(){
        return(
        `<article class="grid-container">
        <img class="grid-item picture project-img" src="/projects/img/${this.img}.png">
        <div class="grid-item description">
            <h2 class="project-name">${this.name}</h2>
            <a href="${this.linkGit}" target="_blank" class="icon-link"><img class="mini-icon" src="/projects/img/placeholder.png"></a>
            <a href="${this.linkDeploy}" target="_blank" class="icon-link"><img class="mini-icon" src="/projects/img/placeholder.png"></a>
            <p>${this.description}</p>
        </div>
    </article>`);
    }
}

//export function for creating skill components to follow SSR
//else it would be CSR after JS loads in the browser
module.exports = Project;