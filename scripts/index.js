const aboutEl = document.getElementById("about-me");
const navAboutEl = document.getElementById("nav-about-me");

navAboutEl.addEventListener("click", smoothScroll);

function smoothScroll() {
    aboutEl.scrollIntoView({behavior: "smooth"});
}