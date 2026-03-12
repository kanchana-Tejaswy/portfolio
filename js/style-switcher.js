/*=============================== Toggle Style Switcher ===========================*/

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
if (styleSwitcherToggle) {
    styleSwitcherToggle.addEventListener("click", () => {
        document.querySelector(".style-switcher").classList.toggle("open");
    });
}

// Hide style switcher on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});


/*=============================== Theme Colors ===========================*/

const alternateStyles = document.querySelectorAll(".alternate-style");

 function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            // Enable the chosen color
            style.disabled = false;
        } else {
            // Disable all other colors
            style.disabled = true;
        }
    });
    localStorage.setItem("color", color);
}


/*=============================== Theme Light and Dark Mode ===========================*/


const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
    
    // Use the variable for dark mode storage
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

window.addEventListener("load", () => {
    // Load Dark/Light Mode
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
    
    // Load Saved Color
    const savedColor = localStorage.getItem("color");
    if (savedColor) {
        setActiveStyle(savedColor);
    }

    // Set correct icon on load
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});