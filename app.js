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
            const categoryName = menuItem.childNodes[0].href.split('#')[1];
            const category = categoryName + '-menu';
            const allCategory = document.querySelector('menu-details');

            console.log(allCategory)
            console.log(menuItem.childNodes[0].href.split('#')[1])
            menuItems.forEach(function(menuItem) {
              menuItem.classList.remove('menu-items-active');
            })
            menuItem.classList.add('menu-items-active');
        })
    })
}

navSlide();
menuContainer();