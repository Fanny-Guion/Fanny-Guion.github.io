const marker = document.querySelector("#header__right--marker");
const item = document.querySelectorAll("nav a");

function indicator (position){
    const leftposition = position.offsetLeft+10
    const widthposition = position.offsetWidth-20
    marker.style.left = `${leftposition}px`;
    marker.style.width = `${widthposition}px`;
}

item.forEach(link => {  
    link.addEventListener('mouseover', (position)=>{indicator(position.target)});
})