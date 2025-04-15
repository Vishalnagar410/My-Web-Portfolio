/*=====================================
Shrink header on scroll
======================================= */
window.addEventListener("scroll",()=>{
    const vnHeader = document.querySelector(".vn-header");
    vnHeader.classList.toggle("shrink", window.scrollY > 0);
});


/*=====================================
Navigation menu
======================================= */
//each bottom navigation menu item active on page scroll
window.addEventListener("scroll",()=>{
    const navMenuSections = document.querySelectorAll(".nav-menu-section");
    const scrollY = window.pageYOffset;

    navMenuSections.forEach((navMenuSection) => {
        let secionHieght = navMenuSection.offsetHeight;
        let sectionTop = navMenuSection.offsetTop -50;
        let id = navMenuSection.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + secionHieght){
            document.querySelector(".bm-nav .menu li a[href*=" + id + "]").classList.add("current");
        }else{
            document.querySelector(".bm-nav .menu li a[href*=" + id + "]").classList.remove("current");
        }
    });
});

//to show/hide the menu on home (page load)

window.addEventListener("DOMContentLoaded",()=>{
    const bottomNav = document.querySelector(".bm-nav");

    bottomNav.classList.toggle("active", window.scrollY < 10);
});

//to show/hide the menu on home (scroll)
const bottomNav = document.querySelector(".bm-nav");
const menuHideBtn = document.querySelector(".menu-hide-btn");
const menuShowBtn = document.querySelector(".menu-show-btn");

var navTimeout;

window.addEventListener("scroll",()=>{
    bottomNav.classList.add("active");
    menuShowBtn.classList.remove("active");

    if(window.scrollY < 10){
        menuHideBtn.classList.remove("active");
        
       
        function scrollStopped(){
            bottomNav.classList.add("active");
        }

        clearTimeout(navTimeout);
        navTimeout = setTimeout(scrollStopped, 2500);
    }

    if(window.scrollY > 10){
        menuHideBtn.classList.add("active");
         
        function scrollStopped(){
            bottomNav.classList.remove("active");
            menuShowBtn.classList.add("active"); 
        }

        clearTimeout(navTimeout);
        navTimeout = setTimeout(scrollStopped, 2500);
    }
});

//to hide the menu on click hide btn

menuHideBtn.addEventListener("click",()=>{
    bottomNav.classList.toggle("active");
    menuHideBtn.classList.toggle("active");
    menuShowBtn.classList.toggle("active");
});

//to show the menu on click show btn
menuShowBtn.addEventListener("click",()=>{
    bottomNav.classList.toggle("active");
    menuHideBtn.classList.add("active");
    menuShowBtn.classList.toggle("active");
});


/*=====================================
to-top button
======================================= */

window.addEventListener("scroll",()=>{
    const toTopBtn = document.querySelector(".to-top-btn");

    toTopBtn.classList.toggle("active", window.scrollY > 0);
});

// sccroll indicator bar
window.addEventListener("scroll", () => {
    const scrollIndicator = document.querySelector(".scroll-indicator-bar");
    const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrollValue = (pageScroll / pageHeight) * 100;
    scrollIndicator.style.width = scrollValue + "%";
});