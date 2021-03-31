var menu = document.querySelector(".menu-nav");
var menuBtn = document.querySelector(".menu-btn");
var cancelBtn = document.querySelector(".cancel-btn");
var navItems = document.querySelectorAll(".nav-item");

menuBtn.addEventListener("click", function(e){
    menu.classList.add("active");
    menuBtn.classList.add("hide");
    navItems.forEach(item => item.classList.add("active"));
})

cancelBtn.addEventListener("click", function(e){
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
    navItems.forEach(item => item.classList.remove("active"));
})

//