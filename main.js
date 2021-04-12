var app = new Vue({
    el: '#app',
    data: {
        socials: ['fab fa-facebook-f', 'fab fa-twitter', 'fab fa-instagram', 'fab fa-youtube'],
        cart: ['Shopping Cart', 'My Account', 'CART'],
        logo: "img/classic_shop_logo2x.png",
        nav: ['Home', 'Shop', 'Products', 'Categories', 'News', 'Elements'],
    }
});

//funzione sticky header
function myFunction() {

    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
    
  }

window.onscroll = function() {myFunction()};

var header = document.getElementById("logoNstuff");
var sticky = header.offsetTop;