/* BACK TO TOP */

document.addEventListener("DOMContentLoaded", () => {

    const backToTopButton =
    document.querySelector(".back-to-top");

    /* SCROLL TOP */

    backToTopButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

});

/* SHOW BUTTON */

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        backToTopButton.classList.add("show");

    } else {

        backToTopButton.classList.remove("show");

    }

});