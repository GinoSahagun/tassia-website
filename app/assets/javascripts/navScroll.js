$(document).ready(function() {
    /*
    Animated navbar when they scroll down at least 10px then it animated and gets its background color
     */
    $(window).scroll(function() {
        if($(document).scrollTop() > 10) {
            $('.navbar-header').addClass('shrink');
            $(".dropdown").addClass('move');

        }
        else {
            $('.navbar-header').removeClass('shrink');
            $(".dropdown").removeClass('move');

        }
    });

    /* Mobile Version of Navbar Menu is Opened
    and they clicked other than the nav, then close it for them
     */
    window.onclick = function (event) {

        //click over grabs the class name
        var clickover = event.target.className;
        //check if the menu is opened
        var _opened = $(".navbar-collapse").hasClass("show");
        //find out if they clicked on nav or not
        if (_opened === true && clickover.search("navbar") != 0) {
            $(".navbar-toggler-icon").click();
        }

    };
    
});
