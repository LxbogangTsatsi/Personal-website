const openChat = document.querySelector('.chatbot-button');

let clicked = false;
openChat.addEventListener('click', () => {
    if (!clicked) {
        document.querySelector('.chatbot').style.top = '50%';
        clicked = !clicked;
    } else {
        document.querySelector('.chatbot').style.top = '-50%';
        document.body.style.opacity = '1';
        clicked = !clicked;
    }
});