/*=====================================
cursor mouse effect
======================================= */
const cursor = document.querySelector(".cursor");
const cursorDot = document.querySelector(".cursor-dot");
const cursorCircle = document.querySelector(".cursor-circle");

document.addEventListener("mousemove",(e)=>{
    let x = e.clientX;
    let y = e.clientY;

    cursorDot.style.top = y + "px";
    cursorDot.style.left = x + "px";
    cursorCircle.style.top = y + "px";
    cursorCircle.style.left = x + "px";
});

// cursor hover effect on links
const cursorHoverlinks = document.querySelectorAll("body a, .theme-btn, .vn-main-btn, .portfolio-card, .swiper-button-next, .swiper-button-prev, .service-card, .contact-social-link li, .contact-form .submit-btn, .menu-show-btn, .menu-hide-btn");

cursorHoverlinks.forEach((cursorHoverlink)=>{
    cursorHoverlink.addEventListener("mouseover",()=>{
        cursorDot.classList.add("large");
        cursorCircle.style.display="none";
    });
});

cursorHoverlinks.forEach((cursorHoverlink)=>{
    cursorHoverlink.addEventListener("mouseout",()=>{
        cursorDot.classList.remove("large");
        cursorCircle.style.display="block";
    });
});
