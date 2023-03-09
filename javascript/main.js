const navList = document.getElementsByClassName("nav-list");
const menuButton = document.getElementById("menu-button");
const toggleNavDisplay = () => {
    navList[0].classList.toggle("show-mobile-nav");
};
menuButton.addEventListener("click", () => toggleNavDisplay());
[...navList[0].children].forEach((li) => {
    li.addEventListener("click", () => toggleNavDisplay());
});
window.addEventListener("resize", (e) => {
    if (document.body.clientWidth >= 500 && navList[0].classList.length > 0) {
        navList[0].classList.remove("show-mobile-nav");
    }
});
