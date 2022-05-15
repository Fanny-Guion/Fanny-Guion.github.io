insertSkillsInDOM(skills); // Lancer la fonction insérer dans le DOM
cardMouseOver(skills) // Lancer la fonction mouseover dans le DOM


// ajouter une carte par skills (cf data/skillsData)
function insertSkillsInDOM(skills) {
    const skillsElement = document.getElementById("main__skills--cards");
    skills.forEach(skill => {
        const skillHTML = buildSkillHTML(skill);
        skillsElement.insertAdjacentHTML("beforeend", skillHTML);
    });

    function buildSkillHTML(skill) {
        return `
                <div class ="skill" id="${skill.name}">
                    <div class="card" >
                        <div class="recto">
                            <div class="recto__container">
                                <div class="recto__container--top">
                                    <img class="recto__container--top-picture" src="./images/${skill.background}" alt="${skill.name}" />
                                    <figcaption class ="recto__container--top-picture-name" >${skill.name}</figcaption>
                                </div>
                                <div class="recto__container--bottom">
                                    <p class ="recto__container--bottom-description-title">DESCRIPTION</p>
                                    ${buildDescriptionsHTML(skill.description)}
                                </div>
                            </div>
                        </div>
                        <div class="verso ${skill.name}Color">
                            <h2>${skill.name}</h2>
                            <div class="verso__score">${skill.score}</div>
                            <div class="verso__methode">
                                <p class="verso__methode--title">Méthodes :<p>
                                    ${buildMethodesHTML(skill.methods)}
                            </div>
                            <img class="verso__img" src="./images/verso_footer.png" alt="verso_footer" />
                            <img class="verso__logo" src="./images/${skill.logo}" alt="${skill.name}" />
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
function cardMouseOver(skills){
    skills.forEach(skill =>{
        const allCardId = document.getElementById(`${skill.name}`)
        allCardId.addEventListener("mouseover", () => {allCardId.classList.add("hovered")});
        allCardId.addEventListener("mouseout", () => {allCardId.classList.remove("hovered")});
        })
}