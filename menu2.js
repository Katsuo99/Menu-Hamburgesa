const menu= document.querySelector(".menu");
const navmenu = document.querySelector(".nav-menu");
const bx= document.querySelector(".bx");

menu.addEventListener("click",() => {
    navmenu.classList.toggle("nav-menu_visible");
});

window.addEventListener("click", e=>{
    if(navmenu.classList.contains("nav-menu_visible") && e.target!=navmenu && e.target!=bx && e.target!=menu){
        navmenu.classList.toggle("nav-menu_visible");
        console.log("entra en el if")
    }
})