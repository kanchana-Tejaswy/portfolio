// ===============================
// FADE-IN ANIMATION ON SCROLL
// ===============================

const fadeElements = document.querySelectorAll('.project-box, .section-title');

const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('show');
        observer.unobserve(entry.target);
    });
}, observerOptions);

fadeElements.forEach(el => {
    el.classList.add('hidden');
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