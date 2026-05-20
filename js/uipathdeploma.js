/* ======================================================
   BACK BUTTON FUNCTION
====================================================== */

function goBack() {
    history.back();
}

/* ======================================================
   SCROLL ANIMATION (FADE-IN ON VIEW)
====================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  elements.forEach((el) => observer.observe(el));
});

/* ======================================================
   OPTIONAL: SMOOTH SCROLL ENHANCEMENT (ANCHORS)
====================================================== */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

/* ======================================================
   OPTIONAL: IMAGE ENCODING (FROM PATH TO URL)
====================================================== */

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.activity-card img').forEach(function (img) {
        const src = img.getAttribute('src');
        if (!src) return;

        const encoded = src
            .split('/')
            .map(function (segment) {
                return encodeURIComponent(segment);
            })
            .join('/');

        img.src = encoded;

        if (!img.alt || img.alt.trim() === '') {
            const heading = img.closest('.activity-card')?.querySelector('h2');
            img.alt = heading ? heading.textContent.trim() : 'UiPath certificate';
        }
    });
});