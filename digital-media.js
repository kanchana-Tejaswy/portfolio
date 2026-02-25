// ================================
// Back Button Function
// ================================
function goBack() {
    window.history.back();
}

// ================================
// Fade-in Scroll Animation
// ================================
document.addEventListener("DOMContentLoaded", function () {

    const faders = document.querySelectorAll('.fade-in');

    if (faders.length === 0) return; // Safety check

    const appearOptions = {
        threshold: 0.2
    };

    const appearOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            entry.target.classList.add('show');
            observer.unobserve(entry.target);

        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

});