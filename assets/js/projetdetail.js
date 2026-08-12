const projects = {

    1: {
        title: "Projet E-commerce Weboxing ",

        subtitle: "Site moderne et responsive",

        image: "../media/projet/weboxing/logo_webg.png",

        description:
        "Ce projet consistait à créer une boutique en ligne moderne avec une expérience utilisateur fluide et immersive.",

        tags: ["HTML", "CSS", "JavaScript", "UI Design"] ,
        link: "https://github.com/stellaric/weboxing"
    },
    2: {
        title: "Projet Site Vitrine FastFood Light ",

        subtitle: "Site moderne et responsive",

        image: "../media/projet/ffl/logo_ffl.png",

        description:
        "Ce projet consistait à créer une boutique en ligne moderne avec une expérience utilisateur fluide et immersive.",

        tags: ["HTML", "CSS", "JavaScript", "UI Design"] ,
        link: "https://github.com/stellaric/resto"
    },
    3: {
        title: "Projet Site Vitrine Lifestyle ",

        subtitle: "Site moderne et responsive",

        image: "../media/projet/lifestyle/logo_life.png",

        description:
        "Ce projet consistait à créer une boutique en ligne moderne avec une expérience utilisateur fluide et immersive.",

        tags: ["HTML", "CSS", "JavaScript", "UI Design"] ,
        link: "https://github.com/stellaric/lifestyle"
    },
    4: {
        title: "Projet Site Vitrine E-commerce Shoes ",
        subtitle: "Site moderne et responsive",
        image: "../media/projet/shoes/logo_shoes.png",
        description: "Ce projet consistait à créer une boutique en ligne moderne avec une expérience utilisateur fluide et immersive.",
        tags: ["HTML", "CSS", "JavaScript", "UI Design"],
        link: "https://github.com/stellaric/shoes"
    },
    5: {
        title: "Projet Site Vitrine E-commerce Voyage ",
        subtitle: "Site moderne et responsive",
        image: "../media/projet/voyage/logo_voyage.png",
        description: "Ce projet consistait à créer une boutique en ligne moderne avec une expérience utilisateur fluide et immersive.",
        tags: ["HTML", "CSS", "JavaScript", "UI Design"],
        link: "https://github.com/stellaric/voyage"
    },
    6: {
        title: "Projet Site réseau social Connectify ",
        subtitle: "Site moderne et responsive",
        image: "../media/projet/connectify/logo_connectify.png",
        description: "Ce projet consistait à créer une boutique en ligne moderne avec une expérience utilisateur fluide et immersive.",
        tags: ["HTML", "CSS", "JavaScript", "UI Design"],
        link: "https://github.com/stellaric/connectify"
    },
    7: {
        title: "Projet Site Vitrine Jeux Gamestore ",
        subtitle: "Site moderne et responsive",    
    image: "../media/projet/gamestore/logo_gamestore.png",
        description: "Ce projet consistait à créer une boutique en ligne moderne avec une expérience utilisateur fluide et immersive.",
        tags: ["HTML", "CSS", "JavaScript", "UI Design"],
        link: "https://github.com/stellaric/gamestore"
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