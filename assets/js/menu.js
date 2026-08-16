/* ========================= */
/* HAMBURGER MENU */
/* ========================= */

const hamburger =
document.querySelector(".hamburger");

const navMenu =
document.querySelector(".nav-menu");

/* OPEN MENU */

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");

    navMenu.classList.toggle("active");

});

/* CLOSE MENU WHEN CLICK */

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        hamburger.classList.remove("active");

        navMenu.classList.remove("active");

    });

});

/* =========================
   LIEN ACTIF
========================= */

const currentPage =
    window.location.pathname.split("/").pop();

const navLinks =
    document.querySelectorAll(
        ".nav-links a, .nav-links-right a"
    );

navLinks.forEach(link => {

    const linkPage =
        link.getAttribute("href")
            .split("/")
            .pop();

    if (linkPage === currentPage) {

        link.classList.add("active");

    }

});