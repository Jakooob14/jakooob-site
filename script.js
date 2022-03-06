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
