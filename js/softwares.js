insertSoftwaresInDOM(softwares); // Lancer la fonction insérer dans le DOM
cardMouseOver(softwares) // Lancer la fonction mouseover dans le DOM


// ajouter une carte par softwares (cf data/softwaresData)
function insertSoftwaresInDOM(softwares) {
    const softwaresElement = document.getElementById("main__softwares--cards");
    softwares.forEach(software => {
        const softwareHTML = buildSoftwareHTML(software);
        softwaresElement.insertAdjacentHTML("beforeend", softwareHTML);
    });

    function buildSoftwareHTML(software) {
        return `
                <div class ="software" id="${software.name}">
                    <div class="card" >
                        <div class="recto">
                            <div class="recto__container">
                                <div class="recto__container--top">
                                    <img class="recto__container--top-picture" src="./images/${software.background}" alt="${software.name}" />
                                    <figcaption class ="recto__container--top-picture-name" >${software.name}</figcaption>
                                </div>
                                <div class="recto__container--bottom">
                                    <p class ="recto__container--bottom-description-title">DESCRIPTION</p>
                                    ${buildDescriptionsHTML(software.description)}
                                </div>
                            </div>
                        </div>
                        <div class="verso ${software.name}Color">
                            <h2>${software.name}</h2>
                            <div class="verso__score">${software.score}</div>
                            <div class="verso__methode">
                                <p class="verso__methode--title">Méthodes :<p>
                                    ${buildMethodesHTML(software.methods)}
                            </div>
                            <img class="verso__img" src="./images/verso_footer.png" alt="verso_footer" />
                            <img class="verso__logo" src="./images/${software.logo}" alt="${software.name}" />
                        </div>
                    </div>
                </div>

        `;

        function buildMethodesHTML(methods) {
            const liMethodesHTML = methods
                .map(method => `<li class ="verso__methodes_li">${method}<li>`)
                .join("");
            return `<ul>${liMethodesHTML}</ul>`;
        }

        function buildDescriptionsHTML(descriptions) {
            const liElementsHTML = descriptions
                .map(description => `<li  class ="recto__container--bottom-descripition-li">${description}<li>`)
                .join("");
            return `<ul>${liElementsHTML}</ul>`;
        }

    }
}


// ajouter/retirer class pour mouse over => hovered  (cf hovered dans css)
function cardMouseOver(softwares){
    softwares.forEach(software =>{
        const allCardId = document.getElementById(`${software.name}`)
        allCardId.addEventListener("mouseover", () => {allCardId.classList.add("hovered")});
        allCardId.addEventListener("mouseout", () => {allCardId.classList.remove("hovered")});
        })
}