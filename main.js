const listItem = document.querySelectorAll(".li");
const buttonMenu = document.querySelector(".toggle");
const navItem = document.getElementsByTagName("ul");

buttonMenu.addEventListener("click", () => {
    listItem[0].classList.toggle("li_visible");
    listItem[1].classList.toggle("li_visible");
    listItem[2].classList.toggle("li_visible");
    listItem[3].classList.toggle("li_visible");
    listItem[4].classList.toggle("li_visible");
    buttonMenu.classList.toggle("toggle_active");
    navItem[0].classList.toggle("ul_visible");
});
