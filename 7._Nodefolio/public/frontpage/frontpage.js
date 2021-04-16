(async function render() {
    //wait till elements get rendered to append buttons
    await renderSkills(4);
    await renderProjects(2, ".projects")
    $(".skills").append(renderMoreButton("skills"));
    $(".projects").append(renderMoreButton("projects"));
})();

function renderMoreButton(link) {
    return (
    `<a href="/${link}" class="more-link">
    <button class="more-button">More</button>
</a>`);
}
