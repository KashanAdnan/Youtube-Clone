var menuIcon = document.querySelector(".menu_icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidbar");
    container.classList.toggle("large_container");
}