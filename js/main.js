
//Nav Buttons Scroll 
const btns = document.querySelectorAll('.btn');

function scrollTo() {
   const selector =  this.getAttribute('data-value'),
         target   =  document.querySelector(selector);
   
   target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
   });
   burgerMenu.classList.remove('active');
}

btns.forEach(btn => btn.addEventListener('click', scrollTo))



// Burger Menu
const burgerBtn = document.querySelector('#burger-menu-btn');
const burgerMenu = document.querySelector('.burger-menu');

burgerBtn.addEventListener('click', toggle);

function toggle() {
  burgerMenu.classList.toggle('active');
};



// EMAIL SUBMIT
const submit = document.getElementById('submit');
const input = document.getElementById('mailInput');

submit.addEventListener('click', mailListAdd);

function mailListAdd(e) {
  e.preventDefault();
  console.log(input.value);
  input.value = "";
}



// NAV FADEIN
const header = document.querySelector('.header');
const navBar = document.querySelector('nav');

function fadeIn() {
  var scrolled = header.getBoundingClientRect().top;
  if(scrolled <= -300) {
    navBar.style.background = "#424659";
  } else if (scrolled > -300) {
    navBar.style.background = "none";
  }
}

window.addEventListener('scroll', fadeIn);



// MAP
function initMap() {
  var uluru = {lat: 52.510190, lng: 13.401335};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}