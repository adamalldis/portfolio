// ABOUT ME navigation
const aboutEl = document.getElementById("about-me");
const navAboutEl = document.getElementById("nav-about-me");

navAboutEl.addEventListener("click", aboutScroll);

function aboutScroll() {
    aboutEl.scrollIntoView({behavior: "smooth"});
}

// SKILLS navigation
const skillsEl = document.getElementById("skills");
const navSkillsEl = document.getElementById("nav-skills");

navSkillsEl.addEventListener("click", skillsScroll);

function skillsScroll() {
    skillsEl.scrollIntoView({behavior: "smooth"});
}

// PROJECTS navigation
const projectsEl = document.getElementById("projects");
const navProjectsEl = document.getElementById("nav-projects");

navProjectsEl.addEventListener("click", projectsScroll);

function projectsScroll() {
    projectsEl.scrollIntoView({behavior: "smooth"});
}