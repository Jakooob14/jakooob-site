function menuPress() {
    const dataToggled = document.querySelector('#menu');
    const buttonToggled = document.querySelector('#menuLine');
    let home = document.getElementById('home-wrapper');
    if(!dataToggled.classList.contains("menuOpen")){
        dataToggled.classList.add('menuOpen');
        buttonToggled.classList.add('menuOpen');
        home.style.transition = 'filter 1s';
        home.style.filter = 'blur(3px)'
    } else{
        dataToggled.classList.remove('menuOpen');
        buttonToggled.classList.remove('menuOpen');
        home.style.transition = 'filter 1s';
        home.style.filter = '';
    }
}

function styleUpdate() {
    var headID = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';

    link.href = 'style-index.css';
    headID.appendChild(link);
};