const navList = document.getElementsByClassName("nav-list");
const menuButton = document.getElementById("menu-button");
const toggleNavDisplay = () => {
    navList[0].classList.toggle("show-mobile-nav");
};
menuButton.addEventListener("click", toggleNavDisplay);
[...navList[0].children].forEach((li) => {
    li.addEventListener("click", toggleNavDisplay);
});
//Remove show-mobile-nav class (if it was open when resizing screen)
window.addEventListener("resize", () => {
    if (
        document.body.clientWidth >= 500 &&
        navList[0].contains("show-mobile-nav")
    ) {
        navList[0].classList.remove("show-mobile-nav");
    }
});
