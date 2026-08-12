/* =====================================================
   POP-UP À PROPOS
===================================================== */

const modalButtons = document.querySelectorAll(".info-button");
const modals = document.querySelectorAll(".modal");
const closeButtons = document.querySelectorAll(".modal-close");


/* =========================
   OUVRIR UN POP-UP
========================= */

modalButtons.forEach(button => {

    button.addEventListener("click", () => {

        const modalId = button.dataset.modal;

        const modal = document.getElementById(modalId);

        if (!modal) return;

        modal.classList.add("active");

        document.body.classList.add("modal-open");

    });

});


/* =========================
   FERMER AVEC LE X
========================= */

closeButtons.forEach(button => {

    button.addEventListener("click", () => {

        closeModal(button.closest(".modal"));

    });

});


/* =========================
   FERMER EN CLIQUANT
   SUR L'ARRIÈRE-PLAN
========================= */

modals.forEach(modal => {

    modal.addEventListener("click", event => {

        if (event.target === modal) {

            closeModal(modal);

        }

    });

});


/* =========================
   FERMER AVEC ECHAP
========================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        const activeModal =
            document.querySelector(".modal.active");

        if (activeModal) {

            closeModal(activeModal);

        }

    }

});


/* =========================
   FONCTION FERMETURE
========================= */

function closeModal(modal) {

    if (!modal) return;

    modal.classList.remove("active");

    document.body.classList.remove("modal-open");

}