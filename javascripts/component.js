const menuBars = document.querySelector('.menu-bars');
const overlay = document.querySelector('.overlay');
const resumeButtonIPad = document.querySelector('#resume-ipad');
const homeLogo = document.querySelectorAll('.home-logo');
const hiddenElements = document.querySelectorAll('.hidden');
const advancedAnim = document.querySelectorAll('.advance-anim');
const contactButtons = document.querySelectorAll('.contact-button');

contactButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        window.location.href = '/html/contact_page.html';
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } // end if
    });
});

hiddenElements.forEach((el) => observer.observe(el));
advancedAnim.forEach((el) => observer.observe(el));

homeLogo.forEach((btn) => {
    btn.addEventListener('click', () => {
        window.location.href = './index.html';
    });
});

let flag = false;
menuBars.addEventListener('click', () => {
    menuBars.classList.toggle('change');
    if (!flag){
        overlay.style.height = '100%';
        flag = true;
    }else{
        overlay.style.height = '0%';
        flag = false;
    }
});

resumeButtonIPad.addEventListener('click', () => {
    
    const link = document.createElement('a');
    link.href = './curriculum_vitae.pdf';
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});