let leftCheck = document.querySelector('#left_nav')
let leftMenu = document.querySelector('.left_menu')
let body = document.querySelector('body')

document.addEventListener('scroll', function () {
  let header = document.querySelector('header')
  if (window.scrollY > 0) {
    header.classList.add('fixed')    
  } else {
    header.classList.remove('fixed')    
  }  
})

leftCheck.addEventListener('click', function () {
  if (! leftMenu.classList.contains('active')) {
    leftMenu.classList.remove('inactive')
    leftMenu.classList.add('active')
    body.classList.add('freezed')
  } else if (leftMenu.classList.contains('active')) {
    leftMenu.classList.remove('active')
    leftMenu.classList.add('inactive')
    body.classList.remove('freezed')
  }
})


document.querySelectorAll('a[href^="#"').forEach(link => {

  link.addEventListener('click', function(e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = document.querySelector('header').offsetHeight;
      // const topOffset = 0; // если не нужен отступ сверху 
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset - 20;

      leftMenu.classList.remove('active')
      leftMenu.classList.add('inactive')
      leftCheck.checked = false
      body.classList.remove('freezed')
      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});

// menuCheck.addEventListener('click', function () {
//   if (leftMenu.classList.contains('inactive')) {
//     leftMenu.classList.remove('inactive')
//     leftMenu.classList.add('active')
//     body.classList.add('freezed')
//   } else if(leftMenu.classList.contains('active')) {
//     leftMenu.classList.remove('active')
//     leftMenu.classList.add('inactive')
//     body.classList.remove('freezed')
//   }
// })