const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElem = document.querySelectorAll('.has-fade');
const menumove = document.querySelectorAll('.has-xmove');

btnHamburger.addEventListener('click', function(){
    console.log('click hamburger');

    
    if(header.classList.contains('open')){
        header.classList.remove('open');
        body.classList.remove('noscroll');
        fadeElem.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
        menumove.forEach(function(element){
          element.classList.remove('moverlin');
          element.classList.add('moverlout');
      });
        
    }
    else {
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElem.forEach(function(element){
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        });
        menumove.forEach(function(element){
          element.classList.add('moverlin');
          element.classList.remove('moverlout');
      });
        
    }
    
});


//scroll-top
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}

//autoheight
// $(document).ready(function(){
//     var scrollTop = 0;
//     $(window).scroll(function(){
//       scrollTop = $(window).scrollTop();
//        $('.counter').html(scrollTop);
      
//       if (scrollTop >= 100) {
//         $('#navbar').addClass('scrolled-nav');
//       } else if (scrollTop < 100) {
//         $('#navbar').removeClass('scrolled-nav');
//       } 
      
//     }); 
    
//   });