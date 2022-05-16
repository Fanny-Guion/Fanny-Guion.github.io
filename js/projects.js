insertProjetsInDOM(projects); // Lancer la fonction insérer dans le DOM



// ajouter une carte par projets (cf data/projectsData)
function insertProjetsInDOM(projects) {
    const projectsElement = document.getElementById("main__projects--cards");
    projects.forEach(projet => {
        const projectHTML = buildProjectHTML(projet);
        projectsElement.insertAdjacentHTML("beforeend", projectHTML);
    });

    function buildProjectHTML(projet) {
        return `
                <div class ="project" id="${projet.name}">
                    <div class="project__card" >
                        <div class="project__card--top">
                            <div class= "project__card--top-picture-name" >${projet.name}</div>
                            <img class= "project__card--top-picture" src="./images/${projet.image}" alt="${projet.name}" />
                        </div>
                        <div class="project__card--bottom">
                            <p class ="project__card--bottom-description-title">DESCRIPTION</p>
                            ${buildDescriptionsHTML(projet.description)}
                        </div>
                    </div>
                </div>

        `
    }
    
    function buildDescriptionsHTML(descriptions) {
        const liElementsHTML = descriptions
            .map(description => `<li  class ="recto__container--bottom-descripition-li">${description}<li>`)
            .join("");
        return `<ul>${liElementsHTML}</ul>`;
    }
}