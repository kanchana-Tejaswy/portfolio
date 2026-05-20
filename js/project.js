// ===============================
// SIDEBAR TOGGLE
// ===============================

const sidebar = document.getElementById("sidebar");
const sidebarToggler = document.getElementById("sidebar-toggler");
const sidebarLinks = document.querySelectorAll(".sidebar-menu a");

if (sidebarToggler) {
    sidebarToggler.addEventListener("click", () => {
        sidebar.classList.toggle("active");
        const icon = sidebarToggler.querySelector("i");
        if (sidebar.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
    });
}

// Close sidebar when a link is clicked
sidebarLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 1200) {
            sidebar.classList.remove("active");
            const icon = sidebarToggler.querySelector("i");
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
    });
});

// ===============================
// FADE-IN ANIMATION ON SCROLL
// ===============================

const fadeElements = document.querySelectorAll('.project-box, .section-title');

const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

fadeElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});


// ===============================
// AUTO PAUSE OTHER VIDEOS
// (Only one video plays at a time)
// ===============================

const videos = document.querySelectorAll("video");

videos.forEach(video => {
    video.addEventListener("play", () => {
        videos.forEach(otherVideo => {
            if (otherVideo !== video) {
                otherVideo.pause();
            }
        });
    });
});


// ===============================
// SMOOTH SCROLL BEHAVIOR
// ===============================

document.documentElement.style.scrollBehavior = "smooth";


// ===============================
// OPTIONAL: BUTTON CLICK EFFECT
// ===============================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
    btn.addEventListener("click", function () {
        this.style.transform = "scale(0.95)";
        setTimeout(() => {
            this.style.transform = "scale(1)";
        }, 150);
    });
});