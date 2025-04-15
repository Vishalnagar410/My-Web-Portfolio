// filter portfolio cards according to porfoloi tabs
document.addEventListener("DOMContentLoaded",()=>{
    const portfolioTabs = document.querySelector(".portfolio-tabs");
    const portfolioTabBtns = portfolioTabs.querySelectorAll(".tab-btn");
    const cardsWithModals = document.querySelectorAll(".portfolio-container .card-with-modal");

    portfolioTabBtns.forEach((tabBtn)=>{
        tabBtn.addEventListener("click",()=>{
            const filter = tabBtn.getAttribute("data-filter");

            cardsWithModals.forEach((cardWithModal)=>{
                if(filter === "all" || cardWithModal.classList.contains(filter)){
                    cardWithModal.style.opacity= "1";
                    cardWithModal.classList.remove("hidden");

                    setTimeout(()=>{
                        cardWithModal.style.opacity="1";
                        cardWithModal.style.transition= ".5s ease"
                    },1);
                }
                else{
                    cardWithModal.style.opacity= "0";
                    cardWithModal.classList.add("hidden");
                    
                    setTimeout(()=>{
                        cardWithModal.style.opacity="0";
                        cardWithModal.style.transition= ".5s ease"
                    },1);
                } 
            });
            // add active class on clicked tab button
            portfolioTabBtns.forEach((tabBtn)=>tabBtn.classList.remove("active"));
            tabBtn.classList.add("active");
        }); 
    });
});

// open close portfolio modal

const portfolioCardWithModals = document.querySelectorAll(".portfolio-container .card-with-modal");

portfolioCardWithModals.forEach((portfolioCardWithModal)=>{
    const portfolioCard = portfolioCardWithModal.querySelector(".portfolio-card");
    const portfolioBackdrop = portfolioCardWithModal.querySelector(".portfolio-modal-backdrop");
    const modalCloseBtn = portfolioCardWithModal.querySelector(".modal-close-btn");
    const portfolioModal = portfolioCardWithModal.querySelector(".portfolio-modal");

    portfolioCard.addEventListener("click", ()=>{
        portfolioBackdrop.style.display="flex";

        setTimeout(()=>{
            portfolioBackdrop.classList.add("active");
        },300);

        setTimeout(()=>{
            portfolioModal.classList.add("active");
        },300);
    });

    modalCloseBtn.addEventListener("click",()=>{
        

        setTimeout(()=>{
            portfolioBackdrop.style.display="none";
        },500);

        setTimeout(()=>{
            portfolioBackdrop.classList.remove("active");
            portfolioModal.classList.remove("active");
        },100);
    });
});
