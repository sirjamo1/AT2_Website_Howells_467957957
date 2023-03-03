const navList = document.getElementsByClassName("nav-list");
const toggleNavDisplay = () => {
    navList[0].classList.toggle("mobile-nav-active");
};
window.addEventListener("resize", (e) => {
    if (document.body.clientWidth >= 500 && navList[0].classList.length > 0) {
        navList[0].classList.remove("mobile-nav-active")
    }
});
