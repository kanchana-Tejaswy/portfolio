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

/* ===== Copy Email Function ===== */
function copyEmail() {
    const emailText = document.getElementById("contact-email").innerText;
    const copyBtn = document.querySelector(".copy-btn");
    const originalIcon = copyBtn.innerHTML;

    navigator.clipboard.writeText(emailText).then(() => {
        // Show feedback
        copyBtn.innerHTML = '<i class="fas fa-check" style="color: #28a745;"></i>';
        
        // Reset after 2 seconds
        setTimeout(() => {
            copyBtn.innerHTML = originalIcon;
        }, 2000);
    }).catch(err => {
        console.error("Failed to copy email: ", err);
    });
}

/* ===== Contact Form Submission ===== */
const submitBtn = document.getElementById("submit-btn");
const formMessage = document.getElementById("form-message");

if (submitBtn) {
    submitBtn.addEventListener("click", async function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get input elements and values
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const subjectInput = document.getElementById("subject");
        const phoneInput = document.getElementById("phone");
        const messageInput = document.getElementById("message");

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const subject = subjectInput.value.trim();
        const phone = phoneInput.value.trim();
        const message = messageInput.value.trim();

        // Reset previous validation states and messages
        [nameInput, emailInput, messageInput].forEach(input => input.style.borderColor = "");
        formMessage.className = "form-message";
        formMessage.innerText = "";
        formMessage.style.display = "none";

        // Basic validation
        let hasError = false;
        if (!name) {
            nameInput.style.borderColor = "red";
            hasError = true;
        }
        if (!email || !email.includes("@")) {
            emailInput.style.borderColor = "red";
            hasError = true;
        }
        if (!message) {
            messageInput.style.borderColor = "red";
            hasError = true;
        }

        if (hasError) {
            formMessage.innerText = "Please fill in all required fields correctly.";
            formMessage.classList.add("error");
            formMessage.style.display = "block";
            return;
        }

        // Change button text while sending
        const originalText = submitBtn.innerText;
        submitBtn.innerHTML = '<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;

        try {
            // Send data to backend
            const response = await fetch("http://localhost:3000/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, subject, phone, message })
            });

            const result = await response.json();

            if (response.ok) {
                formMessage.innerText = "Message sent successfully! I'll get back to you soon.";
                formMessage.classList.add("success");
                formMessage.style.display = "block";
                
                // Clear the form
                nameInput.value = "";
                emailInput.value = "";
                subjectInput.value = "";
                phoneInput.value = "";
                messageInput.value = "";
            } else {
                formMessage.innerText = "Error: " + (result.error || "Failed to send message.");
                formMessage.classList.add("error");
                formMessage.style.display = "block";
            }
        } catch (error) {
            console.error("Error submitting contact form:", error);
            formMessage.innerText = "A network error occurred. Please try again later.";
            formMessage.classList.add("error");
            formMessage.style.display = "block";
        } finally {
            // Restore button state
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
        }
    });
}