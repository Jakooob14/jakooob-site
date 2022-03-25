function setCookie(cname, cvalue, exdays) {
    if(exdays == 'session'){
        document.cookie = cname + "=" + cvalue + ";path=/";
    } else{
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
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

/////////////// ^ Cookies ^ ///////////////

function toggleMenu(){
    var menuContainer = document.getElementById('menu-container');
    var header = document.querySelector('header');
    var menuLine1 = document.getElementById('menuLine1');
    var menuLine2 = document.getElementById('menuLine2');
    if(!menuContainer.classList.contains('menuOpen')){
        menuContainer.classList.add('menuOpen');
        menuLine1.classList.add('menuOpen');
        menuLine2.classList.add('menuOpen');
        menuContainer.style.top = 'calc(4rem + 6px)';
    } else {
        menuContainer.classList.remove('menuOpen');
        menuLine1.classList.remove('menuOpen');
        menuLine2.classList.remove('menuOpen');
        menuContainer.style.top = '-100vh';
    }
}

function themeChange(){  
    var theme = getCookie('theme');
    var root = document.documentElement.style;
    if(theme == 'light'){
        setCookie('theme', 'dark', 'session');
        root.setProperty('--color-bg', '#fff');
    } else if(theme == 'dark'){
        setCookie('theme', 'light', 'session');
        root.setProperty('--color-bg', '#333');
    } else{
        setCookie('theme', 'light', 'session');
        themeChange();
    }
}