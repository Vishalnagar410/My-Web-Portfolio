ScrollReveal({ 
    reset: true,
    distance:'60px',
    duration:2500,
    delay:400,
});

ScrollReveal().reveal('.pic-img', { delay: 100, origin:'top' });
ScrollReveal().reveal('.pic-info, .section-title', { delay: 300, origin:'top' });
ScrollReveal().reveal('.home-social, .home-scroll-btn, .copy-right ', { delay: 600, origin:'bottom' });
ScrollReveal().reveal('.about-img', { delay: 700, origin:'top' });
ScrollReveal().reveal('.about-info,.vn-footer .vn-logo', { delay: 300, origin:'bottom' });
ScrollReveal().reveal('.pro-card, .about-btns, .vn-main-btn,.resume-tabs .tab-btn,.portfolio-tabs .tab-btn', { delay: 500, origin:'right', interval:200 });
ScrollReveal().reveal('#resume .section-content', { delay: 700, origin:'bottom'});
ScrollReveal().reveal('.service-card, .portfolio-card,.contact-item,.contact-social-links,.footer-menu .menu-item ', { delay: 300, origin:'bottom', interval:300});
ScrollReveal().reveal('.contact-info h3', { delay: 100, origin:'bottom', interval:300});
ScrollReveal().reveal('.contact-form-body', { delay: 700, origin:'right', interval:300});
