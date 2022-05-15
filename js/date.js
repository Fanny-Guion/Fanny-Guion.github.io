const dateElement = document.getElementById("footer__container");
const annee = new Date().getFullYear()
dateElement.insertAdjacentHTML('beforeend', `<div class="footer__container--year"> ${annee} </div>`);