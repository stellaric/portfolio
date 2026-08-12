const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll("#projectsList .project-item");
const search = document.getElementById("searchProject");
const count = document.getElementById("countProjects");
const noResults = document.getElementById("noResults");

let currentFilter = "all";

function filterProjects() {

    let visible = 0;

    const searchValue = search.value.toLowerCase().trim();

    cards.forEach(card => {

        const title = card.querySelector("h3").textContent.toLowerCase();
        const category = card.dataset.category;

        const matchFilter =
            currentFilter === "all" ||
            category.includes(currentFilter);

        const matchSearch =
            title.includes(searchValue);

        if (matchFilter && matchSearch) {

            card.classList.remove("hide");
            card.style.display = "block";

            visible++;

        } else {

            card.classList.add("hide");

            setTimeout(() => {

                if (card.classList.contains("hide")) {

                    card.style.display = "none";

                }

            }, 250);

        }

    });

    count.textContent = visible;

    // Affiche ou masque le message "aucun résultat"
    if(noResults){

    noResults.style.display = visible === 0 ? "block" : "none";

}

}

buttons.forEach(button => {

    button.addEventListener("click", () => {

        document.querySelector(".filter-btn.active").classList.remove("active");

        button.classList.add("active");

        currentFilter = button.dataset.filter;

        filterProjects();

    });

});

search.addEventListener("keyup", filterProjects);

// Chargement initial
filterProjects();