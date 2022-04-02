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
