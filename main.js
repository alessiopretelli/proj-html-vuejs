var app = new Vue({
    el: '#app',
    data: {
        socials: ['fab fa-facebook-f', 'fab fa-twitter', 'fab fa-instagram', 'fab fa-youtube'],
        cart: ['Shopping Cart', 'My Account', 'CART'],
        logo: ["img/classic_shop_logo2x.png", "img/classic_shop_logo_footer.png"],
        nav: ['Home', 'Shop', 'Products', 'Categories', 'News', 'Elements'],
        infos: {
          Address: '12345 North Main Street, New York, NY 555555',
          Phone: '1.800.555.6789',
          Email: 'info@company.com',
          Web: 'Theme-fusion.com'
        }, 
        top_rated : [
          {
            name: 'Leather Gloves',
            img: 'img/leather_gloves-120x156.jpg',
            cost: '$45',
            vote: 5
          },
          {
            name: 'Black Leather Jacket',
            img: 'img/black_elegant_leather_jacket-120x156.jpg',
            cost: ['$235', '$200'],
            vote: 5
          },
          {
            name: 'Spring Printed Dress',
            img: 'img/spring_printed_dress-120x156.jpg',
            cost: '$47',
            vote: 5
          }
        ],
        recent_posts: [
          'Aenean lobortis spaien enim viverra',
          'Duis ac massa semper maximus',
          'Nuncs fermint nulla eu justo sem id',
          'Aliquam posuere magna eget nibh',
          'Cras ac nulla ac consecte retrum',
          'Fusce mattis nunc ut aliquam'
        ],
        tags: ['Black',
              'boots',
              'Brown',
              'Casual',
              'D&G',
              'Fabric',
              'flowers',
              'Grey',
              'hat',
              'Hipster',
              'lines',
              'multi-purpose',
              'New York',
              'Outdoors',
              'red',
              'responsive',
              'summer',
              'sweater',
              'Travel',
              'Warm',
              'White',
              'winter'
        ],
        copyright_elements: ['©Copyright 2012-2020', 'Avada Theme by Theme Fusion', 'All Rights Reserved', 'Powered by WordPress'],
        cardsimg: ['img/visa.png', 'img/mastercard.png', 'img/PP_Acceptance_Marks_for_LogoCenter_266x142.png', 'img/Discover-logo.jpg', 'img/amazon-pay.png']
    }
});

//funzione sticky header
function myFunction() {

    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
      jumbo.classList.add('margin');
    } else {
      header.classList.remove("sticky");
      jumbo.classList.remove('margin');
    }
    
  }

window.onscroll = function() {myFunction()};

var header = document.getElementById("logoNstuff");
var jumbo = document.getElementById("jumbotron");
var sticky = header.offsetTop;