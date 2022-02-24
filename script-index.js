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

function onload() {
    bgColorChange(getCookie('bgColor')); 
    itemColorChange(getCookie('itemColor')); 
    accColorChange(getCookie('accColor'));
    txtColorChange(getCookie('txtColor'));
    borderColorChange(getCookie('borderColor'));
}

function bgColorChange(color){
    document.cookie = 'bgColor=' + color + "; max-age=9999999999; secure";
    document.documentElement.style.setProperty('--color-bg', color);
}

function txtColorChange(color) {
    document.cookie = 'txtColor=' + color + "; max-age=9999999999; secure";
    document.documentElement.style.setProperty('--color-text', color);
}

function accColorChange(color) {
    document.cookie = 'accColor=' + color + "; max-age=9999999999; secure";
    document.documentElement.style.setProperty('--accent-color-1', color);
}

function itemColorChange(color) {
    document.cookie = 'itemColor=' + color + "; max-age=9999999999; secure";
    document.documentElement.style.setProperty('--color-itemsbg', color);
}

function borderColorChange(color) {
    document.cookie = 'borderColor=' + color + "; max-age=9999999999; secure";
    document.documentElement.style.setProperty('--color-border', color);
}


function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}