(function() {
    'use strict';

    $('body').imagesLoaded()
        .done( function() {
            console.log('all images are loaded');
            $('.loading').css({ display: 'none' })
        });

    var currentPage = null;
    var home = 'home',
        dance_artist = 'dance_artist',
        choreographer = 'choreographer',
        educator = 'educator',
        on_the_move = 'on_the_move';
    var isMobile = window.innerWidth < 1000;

    // hamburger toggle
    $('.header__hamburger').on('click', function() {
       $(this).toggleClass('header__hamburger--open');
       $('.menu').toggleClass('menu--open');
    });


    // menu background change
    $('.items__item').hover(function() {
        $('.menu__overlay').addClass('menu__overlay--dance_artist');
    }, function() {
        $('.menu__overlay').removeClass('menu__overlay--dance_artist');
    });



    function pageLoad(page) {
        var url = page +'.html';

        $('.wrapper').load("./subsites/" + url, function() {
            currentPage = page;
            var vh = window.innerHeight;
            $('.heroimage').height(vh);

            if (currentPage === home) {
                $(this).on('mousemove', function (ev) {
                    var windowWidth = window.innerWidth,
                        oneSixteen = windowWidth / 16,
                        currentSlice = (ev.pageX / oneSixteen);
                    $('.heroimage--home').attr('class', 'heroimage heroimage--home imgAdd');
                    $('.heroimage--home').addClass('imgAdd img--' + ( Math.floor(currentSlice) + 1 ));
                });
            }
        });
    }

    pageLoad(home);

    $('.header__logo').on('click', function() {
       pageLoad(home);
       $('.menu').removeClass('menu--open');
       if ($('.header__hamburger').hasClass('header__hamburger--open')) {
           $('.header__hamburger').removeClass('header__hamburger--open');
       }
    });

    $('.items__item').on('click', function() {
        var pageName = $(this).attr('data-name');
        pageLoad(pageName);
        $('.menu').removeClass('menu--open');
        $('.header__hamburger').removeClass('header__hamburger--open');
    });
}());
