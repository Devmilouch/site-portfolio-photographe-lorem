const logoMenu = document.querySelector(".logoMenuImg");
const contItems = document.querySelector(".contItems");
const arrayItems = document.querySelectorAll(".items");

logoMenu.addEventListener("click", () => {
    if (contItems.className === "contItems") {
        contItems.className += " responsive";
        logoMenu.style.width = "27px";
        logoMenu.style.top = "14%";
        logoMenu.style.right = "8%";
        logoMenu.src = "ressources/close.svg";
    } else {
        contItems.className = "contItems";
        logoMenu.style.width = "30px";
        logoMenu.style.top = "18%";
        logoMenu.style.right = "8%";
        logoMenu.src = "ressources/menu.svg";
    }
});

arrayItems.forEach(item => {
    item.addEventListener("click", () => {
        contItems.className = "contItems";
        logoMenu.src = "ressources/menu.svg";
    })
})