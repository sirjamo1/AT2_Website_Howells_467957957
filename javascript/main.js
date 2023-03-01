const navList = document.getElementsByClassName("nav-list");
const toggleNavDisplay = () => {
    navList[0].style.setProperty(
        "display",
        `${navList[0].style.display === "none" ? "block" : "none"}`
    );
};
window.addEventListener("resize", (e) => {
    navList[0].style.setProperty(
        "display",
        `${document.body.clientWidth >= 500 ? "flex" : "none"}`
    );
});
