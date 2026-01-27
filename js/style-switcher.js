/*=============================== Toggle Style Switcher ===========================*/
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");

if (styleSwitcherToggle) {
    styleSwitcherToggle.addEventListener("click", () => {
        document.querySelector(".style-switcher").classList.toggle("open");
    });
}

// Hide style switcher on scroll
const styleSwitcher = document.querySelector(".style-switcher");

window.addEventListener("scroll", () => {
    if (styleSwitcher.classList.contains("open")) {
        styleSwitcher.classList.remove("open");
    }
});


/*=============================== Theme Colors ===========================*/
const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyle.forEach((style) => {
        if (color === style.getAttribute("title")) {
    style.disabled = false;
} else {
    style.disabled = true;
}
    });
}

/*=============================== Theme Light and Dark Mode ===========================*/
const dayNight = document.querySelector(".day-night");

if (dayNight) {
    dayNight.addEventListener("click", () => {
        const icon = dayNight.querySelector("i");
        document.body.classList.toggle("dark");
        icon.classList.toggle("fa-sun");
        icon.classList.toggle("fa-moon");
        localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
    });
}


window.addEventListener("load", () => {
    if (!dayNight) return;

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }

    const icon = dayNight.querySelector("i");
    icon.classList.add(document.body.classList.contains("dark") ? "fa-sun" : "fa-moon");

    const savedColor = localStorage.getItem("color");
    if (savedColor) setActiveStyle(savedColor);
});