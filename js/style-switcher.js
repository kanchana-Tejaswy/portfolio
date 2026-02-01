/*=============================== Toggle Style Switcher ===========================*/
/*  const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");

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
}); */
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
/*const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyle.forEach((style) => {
        if (color === style.getAttribute("title")) {
    style.disabled = false;
} else {
    style.disabled = true;
}
    });
} */
const alternateStyles = document.querySelectorAll(".alternate-style");
/*
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
    // Save the color choice
    localStorage.setItem("color", color);
} 
  */ 
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
/*const dayNight = document.querySelector(".day-night");

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
}); */
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