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

window.addEventListener('scroll', () => {
    let offset = window.pageYOffset;
    hero.style.backgroundPositionY = offset * 0.8 + 'px';

    if(offset >= 600) {
        show_cards();
    }
    if(offset >= 900) {
        let help_img = document.querySelector('.how-inner img');
        let help_right = document.querySelector('.how-inner .how-right');

        help_img.style.opacity = 1;
        help_right.style.opacity = 1;
        help_img.style.transform = 'translateX(0px)';
        help_right.style.transform = 'translateX(-50px)';
    }
    if(offset >= 1700) {
        let contact_us = document.querySelector('.contact-us');
        contact_us.style.opacity = 1;
        contact_us.style.transform = 'translateY(-50px)';
    }
});