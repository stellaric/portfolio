const projects = {

    1: {
        title: "Projet E-commerce",

        subtitle: "Site moderne et responsive",

        image: "https://picsum.photos/id/1/1200/700",

        description:
        "Ce projet consistait à créer une boutique en ligne moderne avec une expérience utilisateur fluide et immersive.",

        tags: ["HTML", "CSS", "JavaScript", "UI Design"]
    },

    2: {
        title: "Application Fitness",

        subtitle: "Application mobile intuitive",

        image: "https://picsum.photos/id/2/1200/700",

        description:
        "Une application permettant de suivre les entraînements et les performances sportives.",

        tags: ["Mobile", "UX", "Design", "Prototype"]
    },

    3: {
        title: "Portfolio Créatif",

        subtitle: "Portfolio premium moderne",

        image: "https://picsum.photos/id/3/1200/700",

        description:
        "Création d’un portfolio immersif avec animations modernes et identité visuelle forte.",

        tags: ["Portfolio", "Branding", "CSS", "Animation"]
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