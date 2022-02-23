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

function settingsToggle() {
    const dataToggled = document.querySelector('#settingsOverlay');
    const buttonToggled = document.querySelector('#settings');
    if (!dataToggled.classList.contains("settingsOpen")) {
        dataToggled.classList.add('settingsOpen');
        buttonToggled.classList.add('settingsOpen');
        dataToggled.style.left = '0';
        dataToggled.style.transition = 'opacity .5s';
        dataToggled.style.opacity = '1'
    } else {
        dataToggled.classList.remove('settingsOpen');
        buttonToggled.classList.remove('settingsOpen');
        dataToggled.style.transition = 'opacity .5s';
        dataToggled.style.opacity = '0';
        dataToggled.style.left = '100000cm'
    }
}

window.addEventListener("mousedown", (event) => {
    const cursor = document.querySelector(".custom-cursor");
    if (!cursor.classList.contains("click")) {
        cursor.classList.add("click");

        setTimeout(() => {
            cursor.classList.remove("click");
        }, 400);
    }
});

window.addEventListener("mousemove", (event) => {
    const cursor = document.querySelector(".custom-cursor");
    let x = event.pageX - cursor.offsetWidth / 2,
        y = event.pageY - cursor.offsetHeight / 2;
        cursorSize = getComputedStyle(document.documentElement).getPropertyValue('--cursor-size').replace('px','');
        width = window.innerWidth - cursorSize - 20;
        if(x<width){
            cursor.style.left = `${x}px`;
            cursor.style.top = `${y}px`;
        }
});