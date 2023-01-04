
    // var menu
    var menuMedia = document.querySelector('#menu-media')
    var navbarMenu = document.querySelector('.pages ul')
    var closeMenu = document.querySelector('#close-menu')
    // open menu
    menuMedia.onclick = () => {
        navbarMenu.classList.add('active');
    };
    // close menu
    closeMenu.onclick = () => {
        navbarMenu.classList.remove('active');
    };


    
