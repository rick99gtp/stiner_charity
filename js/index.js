let mission_shown = false;
let mission_shown_2 = false;
let mission_shown_3 = false;
let help_shown = false;
let help_shown_2 = false;
let help_shown_3 = false;
let hero = document.querySelector('.hero');

// on load show h1, h2 and button
show_hero();

function show_hero() {
    let hero_h1 = document.querySelector('.hero-container .hero-text h1');
    let hero_h2 = document.querySelector('.hero-container .hero-text h2');
    let hero_a = document.querySelector('.hero-container .hero-text a');

    hero_h1.style.opacity = 1;
    hero_h1.style.top = '0px';
    hero_h2.style.opacity = 1;
    hero_h2.style.top = '0px';
    hero_a.style.opacity = 1;
    hero_a.style.top = '0px';
}

function show_mission() {
    let mission_h2 = document.querySelector('.our-mission h2');
    mission_h2.style.opacity = 1;
    mission_h2.style.top = '0px';
}

function show_mission_2() {
    let mission_p_1 = document.querySelector('.our-mission p');
    mission_p_1.style.opacity = 1;
    mission_p_1.style.top = '0px';
}

function show_mission_3() {
    let mission_p_2 = document.querySelector('.our-mission p:nth-child(3)');
    mission_p_2.style.opacity = 1;
    mission_p_2.style.top = '0px';
}

function show_help() {
    let this_help = document.querySelector('.how-you-can-help .how-inner h2');
    this_help.style.opacity = 1;
    this_help.style.top = '0px';
}

function show_help_2() {
    let this_help_2 = document.querySelector('.how-you-can-help .how-inner p');
    this_help_2.style.opacity = 1;
    this_help_2.style.top = '0px';
}

function show_help_3() {
    let this_help_3 = document.querySelector('.how-you-can-help .how-inner p:nth-child(3)');
    this_help_3.style.opacity = 1;
    this_help_3.style.top = '0px';
}

window.addEventListener('scroll', () => {
    let offset = window.pageYOffset;
    hero.style.backgroundPositionY = offset * 0.8 + 'px';

    if(offset >= 700 && !mission_shown) {
        mission_shown = true;
        show_mission();
    }
    if(offset >= 800 && !mission_shown_2) {
        mission_shown_2 = true;
        show_mission_2();
    }
    if(offset >= 900 && !mission_shown_3) {
        mission_shown_3 = true;
        show_mission_3();
    }
    if(offset >= 1400 && !help_shown) {
        help_shown = true;
        show_help();
    }
    if(offset >= 1500 && !help_shown_2) {
        help_shown_2 = true;
        show_help_2();
    }
    if(offset >= 1600 && !help_shown_3) {
        help_shown_3 = true;
        show_help_3();
    }
});