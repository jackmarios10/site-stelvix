'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


const video = document.getElementById("stelvixVideo");
const button = document.getElementById("playButton");

button.addEventListener("click", function () {

  if (video.paused) {
    video.play();
    button.style.display = "none";
  } else {
    video.pause();
    button.style.display = "block";
  }

});


document.getElementById("whatsapp-form").addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let phoneUser = document.getElementById("phone").value;
let subject = document.getElementById("subject").value;
let message = document.getElementById("message").value;

let phone = "244923747157"; 

let text = `Olá, recebi uma mensagem do site da STELVIX.%0A%0A` +
`Nome: ${name}%0A` +
`Email: ${email}%0A` +
`Telefone: ${phoneUser}%0A` +
`Assunto: ${subject}%0A%0A` +
`Mensagem: ${message}`;

let url = `https://wa.me/${phone}?text=${text}`;

window.open(url, "_blank");

});