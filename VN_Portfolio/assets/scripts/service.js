/*=====================================
Service modal open close function
=====================================*/
const serviceCardWithModals = document.querySelectorAll(".service-container .card-with-modal");
serviceCardWithModals.forEach((serviceCardWithModal) =>{
    const serviceCard = serviceCardWithModal.querySelector(".service-card");
    const serviceBackDrop = serviceCardWithModal.querySelector(".service-modal-backdrop");
    const modalCloseBtn = serviceCardWithModal.querySelector(".modal-close-btn");
    const serviceModal = serviceCardWithModal.querySelector(".service-modal");
    
    serviceCard.addEventListener("click",()=> {
        serviceBackDrop.style.display ="flex";

        setTimeout(()=>{
            serviceBackDrop.classList.add("active")
        },100);

        setTimeout(()=>{
            serviceModal.classList.add("active")
        },300);
    });

    modalCloseBtn.addEventListener("click",()=>{
        setTimeout(()=>{
            serviceBackDrop.style.display ="none";
        },500);

        setTimeout(()=>{             
            serviceBackDrop.classList.remove("active")
            serviceModal.classList.remove("active")
        },100);
    });
});
