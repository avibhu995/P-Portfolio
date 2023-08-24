// sticky navigation Menu Js
let nav = documnet.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

let val;
window.onscroll = function (){
    if (document.documentElement.scrollTop>20){
        nav.classList.add("sticky");
        scrollBtn.computedStyleMap.display = "block";
    }
    else {
        nav.classList.remove("sticky");
        scrollBtn.computedStyleMap.display = "none";
    }
    }
    //side navigation menu js
    let body = document.querySelector("body");
    let navBar = document.querySelector(".navbar");
    let menuBtn = document.querySelector(".menu-btn");
    let cancelBtn = document.querySelector(".cancel-btn");

    menuBtn.onclick = function(){
        navBar.classList.add("active");
        menuBtn.style.opacity= "0";
        menuBtn.style.pointerEvents = "none";
        body.style.overflowX ="hidden";
        scrollBtn.style.pointerEvents = "none";
    }
    cancelBtn.onclick = function(){
        navBar.classList.remove("active");
        menuBtn.style.opacity= "1";
        menuBtn.style.pointerEvents = "auto";
        body.style.overflow="auto";
        scrollBtn.style.pointerEvents = "auto";
    }
    //side Navigation Bar Close while we click on navigation Links 
    let navLinks = document.querySelector(".menu li a");
    for (var i = 0; i<navLinks.length ; i++){
        navLinks[i],addEventListener("click",function(){
            navBar.classList.remove("active");
            menuBtn.style.opacity = "1";
            menuBtn.style.pointerEvents = "auto";
        });
    }
