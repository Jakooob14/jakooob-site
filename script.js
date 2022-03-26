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

function themeCheck() {
    var theme = getCookie('theme');
    var root = document.documentElement.style;
    var darkTheme = document.getElementById('darktheme');
    var lightTheme = document.getElementById('lighttheme');
    var sunrays = document.getElementById('sunrays');
    var github = document.getElementById('github');
    if (theme == 'dark') {
        root.setProperty('--color-bg', '#333');
        darkTheme.style.display = 'none';
        lightTheme.style.display = 'block';
        sunrays.style.display = 'block';
        github.style.filter = 'invert(0)';
        root.setProperty('--color-bg', '#333');
        root.setProperty('--color-text', '#f1f1f1');
        root.setProperty('--color-header', '#292929');
        root.setProperty('--color-border', '#222');
        root.setProperty('--accent-color-1', '#6d2222');
        root.setProperty('--accent-color-2', '#7a2b2b');
        root.setProperty('--color-itemsbg', '#2a2a2a');
    } else if (theme == 'light') {
        darkTheme.style.display = 'block';
        lightTheme.style.display = 'none';
        sunrays.style.display = 'none';
        github.style.filter = 'invert(1)';
        root.setProperty('--color-bg', '#fff');
        root.setProperty('--color-text', '#333');
        root.setProperty('--color-header', '#eee');
        root.setProperty('--color-border', '#e5e5e5');
        root.setProperty('--accent-color-1', '#c5eeee');
        root.setProperty('--accent-color-2', '#aee');
        root.setProperty('--color-itemsbg', '#e1e1e1');
    } else {
        setCookie('theme', 'dark', 'session');
        themeCheck();
    }
}

function themeChange() {
    var theme = getCookie('theme');
    if (theme == 'light') {
        setCookie('theme', 'dark', 'session');
        themeCheck();
    } else if (theme == 'dark') {
        setCookie('theme', 'light', 'session');
        themeCheck();
    } else {
        setCookie('theme', 'dark', 'session');
        themeCheck();
    }
}