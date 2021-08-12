const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');
        
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 3 + 0.5}s`;
            }
        });

        //Burger Animation
        burger.classList.toggle('toggle');
    });

}

const menuContainer = () => {
    const menuItems = document.querySelectorAll('.menu-items li');

    menuItems.forEach(function(menuItem) {
        menuItem.addEventListener('click', () => {
            menuItems.forEach(function(menuItem) {
              menuItem.classList.remove('menu-items-active');
            })
            menuItem.classList.add('menu-items-active');
        })
    })
}

navSlide();
menuContainer();