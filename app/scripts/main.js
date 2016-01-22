$(document).ready(function() {

    var $window = $(window);

    var $form = $('.header__form-wrap');
    var $mouseIcon = $('.header__mouse');
    var $discount = $('.header__discount');

    var animated = false;

    // Показать форму при скролле

    $window.on('scroll', function(e) {
        if (!animated) {
            $form.addClass('header__form-wrap_animated');
            $mouseIcon.addClass('header__mouse_hidden');
            $discount.addClass('header__discount_animated');
            animated = true;
        }
    });

    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: '', // animation css class (default is animated)
        offset: 300, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function(box) {
            if ($(box).hasClass('features')) {
            	console.log('fired');
                $('.features__heading').addClass('features__heading_animated');
                $('.features__image_first').addClass('features__image_first_animated');
                $('.features__image_second').addClass('features__image_second_animated');

                $('.features__feature').eq(0).addClass('features__feature_animated_first');
                $('.features__feature').eq(1).addClass('features__feature_animated_second');
                $('.features__feature').eq(2).addClass('features__feature_animated_third');
                $('.features__feature').eq(3).addClass('features__feature_animated_forth');

            }
            if ($(box).hasClass('process')) {
            	console.log('fired second');
                $('.process__in').addClass('process__in_animated');
                $('.process__steps').addClass('process__steps_animated');

            }
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        }
    });
    wow.init();

    $('.testimonials__slider').slick({
        dots: false,
        autoplay:true,
        infinite: true,
        arrows: false,
        fade: true,
        cssEase: 'ease'
    });

    $('.header__topline').on('click', '.header__nav-item a', function(e) {
        e.preventDefault();
        var id = $(e.target).attr('href');
        var sectionScrollTo = $(id);

        $('body', 'html').animate({
            scrollTop: sectionScrollTo.position().top
        }, '600');
    });
 });
