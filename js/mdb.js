$(function() {
    
    /*--- Smooth Scrolling ---*/
    $("html").niceScroll({scrollspeed:150,mousescrollstep:100});  

    $('body').on('click', '.nav a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    
    /*---  Accordion ---*/
    $("#accordion .accordion-content").css('display', 'none');
    $("#accordion .accordion-content").first().css('display', 'block');
    // Get all the links.
    var link = $("#accordion .accordion-link");

    // On clicking of the links do something.
    link.on('click', function(e) {

        e.preventDefault();

        var a = $(this).attr("href");

        $(a).slideDown('fast');

        //$(a).slideToggle('fast');
        $("#accordion .accordion-content").not(a).slideUp('fast');

    });
});