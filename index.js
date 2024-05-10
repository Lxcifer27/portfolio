// logo time
var date = new Date();
const elementTime = document.getElementById('current_time');
const elementYear = document.getElementById('current_year');
var year = date.getFullYear();
elementYear.innerHTML = year;
const mediaQueryListObject = window.matchMedia('(min-width: 1200px)');

function printTime() {
  date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  mediaQueryListObject.addEventListener('change', () => {
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (hours > 12) {
      hours = hours - 12;
      elementTime.innerHTML = hours + ' : ' + minutes + '  PM ';
    } else if (hours < 12) {
      elementTime.innerHTML = hours + ' : ' + minutes + '  AM ';
    } else if ((hours = 12)) {
      elementTime.innerHTML = hours + ' : ' + minutes + '  PM ';
    }
  });
  if (elementTime && mediaQueryListObject.matches) {
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (hours > 12) {
      hours = hours - 12;
      elementTime.innerHTML =
        hours + ' : ' + minutes + ' : ' + seconds + '  PM ';
    } else if (hours < 12) {
      elementTime.innerHTML =
        hours + ' : ' + minutes + ' : ' + seconds + '  AM ';
    } else if ((hours = 12)) {
      elementTime.innerHTML =
        hours + ' : ' + minutes + ' : ' + seconds + '  PM ';
    }
  }
}

setInterval(function () {
  printTime();
}, 1000);

// section-1 date
const elementDate = document.getElementById('current_date');
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const listOfDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();
var numberOfDay = date.getDay();
elementDate.innerHTML =
  listOfDays[numberOfDay] + ' ' + months[month] + ', ' + day + ', ' + year;

// marquee initialised
$(document).ready(function () {
  $('.marquee').slick({
    speed: 10000,
    autoplay: true,
    autoplaySpeed: 10,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    arrows: false,
    buttons: false,
  });
});

// project-slider
$(document).ready(function () {
  $('.projects-list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    autoplay: false,
    rows: 2,
  });
  $('.button-prev').click(function () {
    $('.projects-list').slick('slickPrev');
    $('.button-prev').addClass('slick-disabled');
    $('.button-next').removeClass('slick-disabled');
  });

  $('.button-next').click(function () {
    $('.projects-list').slick('slickNext');
    $('.button-prev').removeClass('slick-disabled');
    $('.button-next').addClass('slick-disabled');
  });
});
