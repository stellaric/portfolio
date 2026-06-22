const projects = {

    1: {
        title: "Projet E-commerce Weboxing ",

        subtitle: "Site moderne et responsive",

        image: "../media/projet/weboxing/logo_weboxing.png",

        description:
        "Ce projet consistait à créer une boutique en ligne moderne avec une expérience utilisateur fluide et immersive.",

        tags: ["HTML", "CSS", "JavaScript", "UI Design"] ,
        link: "https://github.com/stellaric/weboxing"
    }

};

/* RÉCUPÉRATION ID */
const params = new URLSearchParams(window.location.search);

const id = params.get("id");

/* DATA */
const project = projects[id];

/* INSERTION */
document.getElementById("project-title").textContent =
project.title;

document.getElementById("project-subtitle").textContent =
project.subtitle;

document.getElementById("project-image").src =
project.image;

document.getElementById("project-description").textContent =
project.description;

/* TAGS */
const tagsContainer =
document.getElementById("project-tags");

project.tags.forEach(tag => {

    const span = document.createElement("span");

    span.textContent = tag;

    tagsContainer.appendChild(span);

});