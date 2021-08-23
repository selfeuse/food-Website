const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const navSection = document.querySelector('.nav-section');
    const arrows = document.querySelector('.arrows-area');

    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');
        navSection.style.overflow = 'initial';
        arrows.classList.toggle('arrows-hidden');
        
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
                const categoryName = menuItem.childNodes[0].href.split('#')[1];
                const category = categoryName + '-menu';
                const elem = document.getElementById(category);

                elem.style.display = 'none';

                menuItem.classList.remove('menu-items-active');
            })
            
            const categoryName = menuItem.childNodes[0].href.split('#')[1];
            const category = categoryName + '-menu';
            const elem = document.getElementById(category);

            elem.style.display = 'grid';
            menuItem.classList.add('menu-items-active');
        })
    })
}

navSlide();
menuContainer();

