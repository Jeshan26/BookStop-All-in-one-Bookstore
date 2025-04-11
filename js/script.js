// script to get the mobile nav hamburgercick events and adding class while maing the use of fade to slide in the mobile nav on hamburger click.
$(document).ready(function () {
    $('#hamburger').click(function () {
      $(this).find('i').toggleClass('fa-bars fa-xmark');
      $('#mobileMenu').fadeToggle(500);
    });

    // adding the filters to the shop page, 

$('#filters input[type="checkbox"]').on('change', function () {
    const selected = $('#filters input[type="checkbox"]:checked')
      .map(function () {
        return this.value;
      })
      .get();
  
    if (selected.length === 0) {
      // If no filters are selected, show all
      $('.featured-items').show();
      return;
    }
  
    $('.featured-items').each(function () {
        const tags = $(this).data('tags').split(' ');
        const match = selected.some(tag => tags.includes(tag));
        if (match) {
          $(this).css('display', 'block');
        } else {
          $(this).css('display', 'none');
        }
      });
  });
  });

  // script to fetch the scroll-height and adding a class to make effects 
$(window).on("scroll", function () {
    // Get the scroll position and total page height
    const scrollPosition = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight;

    // 60% of the page height for the newsletter
    const newsletterThreshold = pageHeight * 0.88;

    // 20% of the page height for the header
    const headerThreshold = pageHeight * 0.2;

     // Add or remove the class from the header based on 10% of the page height
     if (scrollPosition > headerThreshold) {
        $(".desktop-nav").addClass("scrollHeader");
    } else {
        $(".desktop-nav").removeClass("scrollHeader");
    }

//  this will make the click me subscribe btn visible only if scroll is reached 88 percent and form is hiiden
    if (scrollPosition > newsletterThreshold && $('#newsletter-form').is(':hidden')){ 
        $("#subscribe-btn").fadeIn();   
    } else {
        $("#subscribe-btn").fadeOut();   
    }

    // When the "Click and Subscribe" button is clicked, show the form
    $("#subscribe-btn").on("click", function() {
        $("#newsletter-form").fadeIn(); // Reveal the form
        $(this).fadeOut(); // Hide the button
    });
});


  