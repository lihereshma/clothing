var hamburger = document.querySelector('.hamburger');
var nav = document.querySelector('.menu');
hamburger.addEventListener('click',navshow);

function navshow() {
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
  hamburger.classList.toggle('open');
}

$(document).ready(function(){
  $('.slider').slick({
  slidesToShow: 1,
  dots:true,
  autoplay:true
  });
});





















