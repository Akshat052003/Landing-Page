window.onscroll = () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 100);
}


const swiper = new Swiper(".swiper" , {
    loop : true,
    pagination : {
        el : ".swiper-pagination",
    },
});
let sections = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top > offset && top < offset + height){
            navLink.forEach(link => {
                 link.classList.remove('active');
                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            
        }
     

    })
    let menuIcon = document.querySelector('#menu-icon');
    let navLinks = document.querySelector('.nav-links');

    menuIcon.classList.remove('fa-x');
    navLinks.classList.remove('active');
}
let menuIcon = document.querySelector('#menu-icon');
let navLinks = document.querySelector('.nav-links');
menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-x");
    navLinks.classList.toggle('active');
}
