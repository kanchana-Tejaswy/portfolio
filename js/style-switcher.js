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

function updateIcon() {
    const icon = dayNight.querySelector("i");
    if (document.body.classList.contains("dark")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
}

dayNight.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    updateIcon();
    
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
    updateIcon();
});