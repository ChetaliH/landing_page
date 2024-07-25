(function($) {

    var $window = $(window),
        $body = $('body'),
        $header = $('#header'),
        $banner = $('#banner'),
        $footer = $('#footer'); // Reference to the footer

    // Breakpoints.
    breakpoints({
        xlarge: '(max-width: 1680px)',
        large: '(max-width: 1280px)',
        medium: '(max-width: 980px)',
        small: '(max-width: 736px)',
        xsmall: '(max-width: 480px)'
    });

    // Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Header.
    if ($banner.length > 0 && $header.hasClass('alt')) {
        $window.on('resize', function() {
            $window.trigger('scroll');
        });

        $banner.scrollex({
            bottom: $header.outerHeight(),
            terminate: function() {
                $header.removeClass('alt');
            },
            enter: function() {
                $header.addClass('alt');
            },
            leave: function() {
                $header.removeClass('alt');
            }
        });
    }

    // Scroll to footer on menu button click
    $body.on('click', 'a[href="#menu"]', function(event) {
        event.stopPropagation();
        event.preventDefault();

        // Scroll to footer
        $('html, body').animate({
            scrollTop: $footer.offset().top
        }, 2000); // Adjust the duration as needed
    });

})(jQuery);
