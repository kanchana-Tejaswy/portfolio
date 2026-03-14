/*============typing animation========*/
var typed = new Typed(".typing", {
    strings: [
        "Web Designer",
        "Web Developer",
        "UiPath Certified Developer",
        "Content Creator"
    ],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
});
/* ============ Aside Navigation ============ */

const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavlist = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;

/* ===== Navigation Click ===== */

for (let i = 0; i < totalNavlist; i++)
{
    const a = navList[i].querySelector("a");

    a.addEventListener("click", function ()
    {
        removeBackSection();

        for (let j = 0; j < totalNavlist; j++)
        {
            if (navList[j].querySelector("a").classList.contains("active"))
            {
                addBackSection(j);
            }

            navList[j].querySelector("a").classList.remove("active");
        }

        this.classList.add("active");
        showSection(this);

        if (window.innerWidth < 1200)
        {
            asideSectionToggleBtn();
        }
    });
}


/* ===== Remove Back Section ===== */

function removeBackSection()
{
    for (let i = 0; i < totalSection; i++)
    {
        allSection[i].classList.remove("back-section");
    }
}


/* ===== Add Back Section ===== */

function addBackSection(num)
{
    if (num !== undefined)
    {
        allSection[num].classList.add("back-section");
    }
}


/* ===== Show Active Section ===== */

function showSection(element)
{
    for (let i = 0; i < totalSection; i++)
    {
        allSection[i].classList.remove("active");
    }

    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}


/* ===== Update Navigation ===== */

function updateNav(element)
{
    for (let i = 0; i < totalNavlist; i++)
    {
        const target = element.getAttribute("href").split("#")[1];

        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
        {
            navList[i].querySelector("a").classList.add("active");
        }
        else
        {
            navList[i].querySelector("a").classList.remove("active");
        }
    }
}


/* ===== Hire Me Button ===== */

document.querySelector(".hire-me").addEventListener("click", function ()
{
    const sectionIndex = parseInt(this.getAttribute("data-section-index"));

    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
});


/* ===== Aside Toggle Button ===== */

const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () =>
{
    asideSectionToggleBtn();
});


/* ===== Toggle Sidebar ===== */

function asideSectionToggleBtn()
{
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");

    for (let i = 0; i < totalSection; i++)
    {
        allSection[i].classList.toggle("open");
    }
}

/* ===== Contact Form Submission ===== */
const submitBtn = document.getElementById("submit-btn");
if (submitBtn) {
    submitBtn.addEventListener("click", async function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // Basic validation
        if (!name || !email || !message) {
            alert("Please fill in all required fields (Name, Email, Message).");
            return;
        }

        // Change button text while sending
        const originalText = submitBtn.innerText;
        submitBtn.innerText = "Sending...";
        submitBtn.disabled = true;

        try {
            // Send data to backend
            const response = await fetch("http://localhost:3000/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, subject, message })
            });

            const result = await response.json();

            if (response.ok) {
                alert("Message sent successfully!");
                // Clear the form
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("subject").value = "";
                document.getElementById("message").value = "";
            } else {
                alert("Error: " + (result.error || "Failed to send message."));
            }
        } catch (error) {
            console.error("Error submitting contact form:", error);
            alert("A network error occurred. Please try again later.");
        } finally {
            // Restore button state
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
        }
    });
}