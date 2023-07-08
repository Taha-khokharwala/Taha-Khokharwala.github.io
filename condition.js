var typed = new Typed('.multiple-text', {
    strings: ["also known as 'TMK'.","a Web Developer.","a YouTuber."],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true
});

// toggle bar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// Scroll Section Active Link

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });
    // Sticky Navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.screenY > 100);
    
    
    //deactivate navebar
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
