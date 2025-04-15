/*=====================================
Dark mode toggle 
======================================= */
// change theme and save current theme on click
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click",()=>{
    //change theme icon and theme on click theme button
    themeBtn.classList.toggle("active-sun-icon");
    document.body.classList.toggle("light-theme");

    //save current theme in local storage
    const getCurrentIcon = themeBtn.classList.contains("active-sun-icon") ? "sun" : "moon";
    const getCurrentTheme = document.body.classList.contains("light-theme") ? "light" : "dark";

    localStorage.setItem("vn-saved-icon", getCurrentIcon());
    localStorage.setItem("vn-saved-theme", getCurrentTheme());
});

const savedIcon = localStorage.getItem("vn-saved-icon");
const savedTheme = localStorage.getItem("vn-saved-theme");

document.addEventListener("DOMContentLoaded",()=>{
    //check if saved icon and theme is not null
    if(savedIcon && savedTheme){
        //set saved icon and theme on page load
        themeBtn.classList.toggle("active-sun-icon", savedIcon === "sun");
        document.body.classList.toggle("light-theme", savedTheme === "light");
    }else{
        //set default icon and theme on page load
        themeBtn.classList.remove("active-sun-icon");
        document.body.classList.remove("light-theme");
    }
});
