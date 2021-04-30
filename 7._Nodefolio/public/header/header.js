let toggle = false;

function toggleMenu(togglePassed) {
    toggle = (typeof togglePassed !== 'undefined') ? togglePassed : !toggle;
    if (toggle) {
        $(".toggleable").show()
    } else {
        $(".toggleable").hide()
    }
}

window.addEventListener("resize", () => {
    if (window.innerWidth > 640) {
        if (!toggle) toggleMenu(true);
    } else {
        if (toggle) toggleMenu(false);
    }
})

window.addEventListener("load", () => {
    if (window.innerWidth > 640) {
        toggleMenu(true);
    } else {
        toggleMenu(false);
    }
})