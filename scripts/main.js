//Slider
let slideSize;

const slider = $('.slide')
const slides = slider.find('.slide-image');
const slide = slides.find('.slide-image-item');
const pause = 6000;
let currentSlide = 0;
let interval;

//Verifica a largura da página
function checkWidth() {
  slideSize = slide.width();
}
checkWidth();
$(window).resize(checkWidth);
$(slide).resize(checkWidth);

//Troca o slide conforme os dot buttons
function setSlide(number) {
  currentSlide = number;
  margin = -slideSize;
  slides.css('margin-left', number * margin);
}

//Anima os slides
function startSlider() {
  interval = setInterval(function () {
    slides.animate({ 'margin-left': '-=' + slideSize }, 2000, function () {
      currentSlide++;
      if (currentSlide == slide.length) {
        currentSlide = 1;
        slides.css('margin-left', 0);
      }
    });
  }, pause);
}
//Para a animação dos slides
function stopSlider() {
  clearInterval(interval);
}

slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);

startSlider();

//Fitro Cards

$('button.category-1').click(function () {
  filterCards('category-1');
  $('.category-filter').removeClass('activated-filter');
  $(this).addClass('activated-filter');
});
$('button.category-2').click(function () {
  filterCards('category-2');
  $('.category-filter').removeClass('activated-filter');
  $(this).addClass('activated-filter');
});
$('button.category-3').click(function () {
  filterCards('category-3');
  $('.category-filter').removeClass('activated-filter');
  $(this).addClass('activated-filter');
});
$('button.category-4').click(function () {
  filterCards('category-4');
  $('.category-filter').removeClass('activated-filter');
  $(this).addClass('activated-filter');
});
$('button.category-all').click(function () {
  showAllCards();
  $('.category-filter').removeClass('activated-filter');
  $(this).addClass('activated-filter');
});

function filterCards(filter) {
  $('.card').show();
  $('.card:not(.' + filter + ')').hide("fast");
}

function showAllCards() {
  $('.card').show("fast");
}

//menu toggle - smart menu
let menu = false;

let windowSize = $(window).width();

let menuSmart = false;

//Controle do SmartMenu
function menuMobile() {
  if (!menuSmart) {
    $('.menu-toggle i').removeClass('fa-bars').addClass('fa-times');
    $('.menu-mobile').show();
    $('html').toggleClass('menu-active');
    menuSmart = true;
  } else {
    $('.menu-toggle i').removeClass('fa-times').addClass('fa-bars');
    $('.menu-mobile').hide();
    $('html').removeClass('menu-active');
    menuSmart = false;
  }
}
//Controle do Menu Absolute Toggle
$('.menu-toggle').on('click touchstart', function (e) {
  if (windowSize <= 600) {
    menuMobile();
    return;
  }
  if (!menu) {
    $('i', this).removeClass('fa-bars').addClass('fa-times');
    $('.menu').show();
    menu = true;
  } else {
    $('i', this).removeClass('fa-times').addClass('fa-bars');
    menu = false;
    $('.menu').hide();
  }
  e.preventDefault();
});
