let search = document.querySelector('.search_box');

document.querySelector('#search_icon').onclick = () =>{
    search.classList.toggle('active');
    cart.classList.remove('active');
     user.classList.remove('active');
     navbar.classList.remove('active');
}


let cart = document.querySelector('.cart');

document.querySelector('#cart_icon').onclick = () =>{
    cart.classList.toggle('active');
     search.classList.remove('active');
      user.classList.remove('active');
      navbar.classList.remove('active');
      
}




let user = document.querySelector('.user');

document.querySelector('#user_icon').onclick = () =>{
    user.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
     navbar.classList.remove('active');
}



let navbar = document.querySelector('.navbar');

document.querySelector('#menu_icon').onclick = () =>{
    navbar.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
    user.classList.remove('active');
    
  
}





window.onscroll = () => {
    search.classList.remove('active');
    cart.classList.remove('active');
    user.classList.remove('active');
     navbar.classList.remove('active');
}





// navbar shadow 
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});








// swiper 
 var swiper = new Swiper(".new-arrival", {
      spaceBetween: 20,
      loop:true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      centeredSlides: true,
      breakpoints: {
        0: {
            slidesperview:0,
        },
        568 : {
            slidesperview:2,
        },
         768 : {
            slidesperview:2,
        },
         1020 : {
            slidesperview:3,
        },

      },
    });


