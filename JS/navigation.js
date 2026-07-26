// ======================================
// NAVIGATION
// ======================================

// Buttons
const menuBtn = document.querySelector(".menu-btn");
const storyBtn = document.querySelector(".story-btn");
const visitBtn = document.querySelector(".visit-navbar");

// Sections
const menuSection = document.querySelector("#menu");
const aboutSection = document.querySelector("#about");
const contactSection = document.querySelector("#contact");

// Hero buttons

menuBtn?.addEventListener("click", () => {
    menuSection?.scrollIntoView({
        behavior: "smooth"
    });
});

storyBtn?.addEventListener("click", () => {
    aboutSection?.scrollIntoView({
        behavior: "smooth"
    });
});

visitBtn?.addEventListener("click", () => {
    contactSection?.scrollIntoView({
        behavior: "smooth"
    });
});

// Navbar links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});