let mission_shown = false;
let mission_shown_2 = false;
let mission_shown_3 = false;
let help_shown = false;
let help_shown_2 = false;
let help_shown_3 = false;
let help_shown_4 = false;
let hero = document.querySelector('.hero');

// on load show h1, h2 and button
show_hero();

function show_hero() {
    let hero_elements = document.getElementsByName('hero-fade-in');

    for(let i = 0, max = hero_elements.length; i < max; i++) {
        hero_elements[i].style.opacity = 1;
    }
}

function show_cards() {
    let cards = document.querySelectorAll('.card');
    let delay = .1;
    let count = 0;

    cards.forEach(card => {
        card.style.opacity = 1;
        card.style.transitionDelay = (delay * count) + 's';
        count++;
    });
}

function show_help() {
    let help_elements = document.getElementsByName('help-fade-in');

    for(let i = 0, max = hero_elements.length; i < max; i++) {
        hero_elements[i].style.opacity = 1;
    }
}

function resetNavLinks() {
    let nav_links = document.querySelectorAll('nav ul li a');
        nav_links.forEach(link => {
        link.classList.remove('active');
    });
}

window.addEventListener('scroll', () => {
    let offset = window.pageYOffset;
    hero.style.backgroundPositionY = offset * 0.8 + 'px';
    let header = document.querySelector('header');

    if(offset <= 100) {
        header.style.position = 'relative';
        header.style.opacity = 1;
        resetNavLinks();
        let home_nav_link = document.querySelector('nav ul li:nth-child(1) a');
        home_nav_link.classList.add('active');
    }
    if(offset > 100 && offset <= 200) {
        header.style.opacity = 0;
    }
    if(offset > 200) {
        header.style.position = 'fixed';
        header.style.opacity = 1;
    }
    if(offset >= 400) {
        let what_we_do = document.querySelector('.what-we-do-inner');
        what_we_do.style.opacity = 1;
        what_we_do.style.transform = 'translateY(30px)';

        // change active class to what-we-do nav link
        resetNavLinks();

        let what_we_do_nav_link = document.querySelector('nav ul li:nth-child(2) a');
        what_we_do_nav_link.classList.add('active');
    }
    if(offset >= 600) {
        show_cards();
    }
    if(offset >= 1100) {
        let help_img = document.querySelector('.how-inner img');
        let help_right = document.querySelector('.how-inner .how-right');

        help_img.style.opacity = 1;
        help_right.style.opacity = 1;
        help_img.style.transform = 'translateX(0px)';
        help_right.style.transform = 'translateX(-50px)';
    }
    if(offset >= 1300) {
        resetNavLinks();

        let help_nav_link = document.querySelector('nav ul li:nth-child(3) a');
        help_nav_link.classList.add('active');
    }
    if(offset >= 1700) {
        let contact_us = document.querySelector('.contact-us');
        contact_us.style.opacity = 1;
        contact_us.style.transform = 'translateY(-50px)';

        resetNavLinks();

        let contact_us_nav_link = document.querySelector('nav ul li:nth-child(4) a');
        contact_us_nav_link.classList.add('active');
    }
});