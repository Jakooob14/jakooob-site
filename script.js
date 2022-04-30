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

document.getElementById('home-wrapper').addEventListener('mousemove', e => {
    var divideBy = 40;
    var text = document.getElementById('desc-bg');
    var width = document.body.getBoundingClientRect().width;
    var height = document.body.getBoundingClientRect().height;
    var x = (e.x - (width / 2)) / divideBy;
    var y = (e.y - (height / 2)) / divideBy - 7;
    console.log(e.x + ' | ' + e.y)
    text.style.marginLeft = x + 'px';
    text.style.marginTop = y + 'px';
});