const resumeButton = document.querySelector('#resume-button');
const profileImages = document.querySelectorAll('#profile-img');

profileImages.forEach((btn) => {
    btn.addEventListener('click', () => {
        window.location.href = './about_page.html';
    });
});

resumeButton.addEventListener('click', () => {
    
    const link = document.createElement('a');
    link.href = './curriculum_vitae.pdf';
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
