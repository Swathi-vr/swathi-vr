const button = document.querySelector(".button");

button.addEventListener("click", function () {
    alert("Thank you for visiting my portfolio!");
});
// Welcome message when the website loads
window.onload = function () {
    console.log("Welcome to Swathi's Portfolio!");
};

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Thank you! Your message has been submitted.");

    contactForm.reset();
});