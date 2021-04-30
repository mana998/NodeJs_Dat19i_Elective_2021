let toggle = false;

function toggleMenu(togglePassed) {
    console.log("TogglePassed",togglePassed);
    console.log("Toggle",toggle);
    toggle = (typeof togglePassed !== 'undefined') ? togglePassed : !toggle;
    console.log("Toggle",toggle);
    if (toggle) {
        $(".toggleable").show()
    } else {
        $(".toggleable").hide()
    }
}

window.addEventListener("resize", () => {
    console.log("resize");
    if (window.innerWidth > 640) {
        if (!toggle) toggleMenu(true);
    } else {
        if (toggle) toggleMenu(false);
    }
})

window.addEventListener("load", () => {
    toggleMenu(false);
})