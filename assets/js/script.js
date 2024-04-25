'use strict';

document.addEventListener("DOMContentLoaded", () => {
    const $navBar = document.querySelector("[data-navbar]");
    const $navToggler = document.querySelector("[data-nav-toggler]");
    
    if ($navToggler && $navBar) {
        $navToggler.addEventListener("click", () => {
            $navBar.classList.toggle("active");
        });
    } else {
        console.error("Navigation toggler or navbar not found");
    }

    const header = document.querySelector("[data-header]")
    window.addEventListener("scroll",()=>{
        header.classList[window.scrollY>50 ? "add":"remove"]("active")
    })
});
