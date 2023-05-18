import "./scss/style.scss"

console.log("Hello World!");

// const body = document.getElementsByClassName("hidden")[0];

// window.onload = function () {
//     setTimeout(() => {
//         body.classList.remove("hidden");
//     }, 2000);
// }


const hamburger_menu = document.getElementsByClassName("js_hamburger_menu")[0];
const hamburger_menu_border = document.getElementsByClassName("js_hamburger_menu_border")[0];
const header_navi_sp = document.getElementsByClassName("js_header_navi_sp")[0];

hamburger_menu.addEventListener("click", function () {
    hamburger_menu_border.classList.toggle("is_active");
    header_navi_sp.classList.toggle("is_active");
})