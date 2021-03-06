    function highlightSubMenu() {
        var target = '#hut-video .submenu > li';
        var href = window.location.href;
        var hrefLast = href.substr(href.lastIndexOf('/') + 1);
        var urlSplit = hrefLast.split('.');
        var newUrl = urlSplit[0];
        $(target + '[data-name="' + newUrl + '"]').addClass('active').siblings().removeClass('active');
    }

    function stickIt() {
        var orgElementPos = $('.original').offset();
        orgElementTop = orgElementPos.top;

        if ($(window).scrollTop() >= (orgElementTop)) {
            // scrolled past the original position; now only show the cloned, sticky element.

            // Cloned element should always have same left position and width as original element.
            orgElement = $('.original');
            coordsOrgElement = orgElement.offset();
            leftOrgElement = coordsOrgElement.left;
            widthOrgElement = orgElement.css('width');
            $('.cloned').css('left', leftOrgElement + 'px').css('top', 0).css('width', widthOrgElement).show();
            $('.original').css('visibility', 'hidden');
        } else {
            // not scrolled past the menu; only show the original menu.
            $('.cloned').hide();
            $('.original').css('visibility', 'visible');
        }


    }

    // function to clone the megamenu so the cloned one is what we stick
    function cloneMegamenu() {
        var megamenu = $("#megamenu-lg");
        $(megamenu).addClass('original').clone().insertAfter(megamenu).addClass('cloned').css('position', 'fixed').css('top', '0').css('margin-top', '0').css('z-index', '500').removeClass('original').hide();
        scrollIntervalID = setInterval(stickIt, 10);
    }

    /* make the isotope a bit dynamic
     * example of use => doIsotope('#gallery')
     */
    function doIsotope($target) {
        // wrap the isotope init in imagesLoaded plugins to prevent unloaded images broke the isotope
        var $grid = $($target).imagesLoaded(function() {
            $grid.isotope({
                // options
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    // use element for option
                    columnWidth: '.grid-sizer'
                }
            });
        });
    }

    function wrapSlick() {
        var thumbnails = $('#vod-content > .vod-content-tile');
        var activeclass = 'setslick';

        // for every 8 image wrap it in a div
        for (var i = 0; i < thumbnails.length; i += 8) {
            // display the content using .wrapAll()
            thumbnails.slice(i, i + 8).wrapAll('<div class="' + activeclass + '"></div>');
        }
        $('.setslick').slick({
            draggable: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },{
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }]
        })
    }
    $(document).ready(function() {

        // instantiate fastclick
        FastClick.attach(document.body);

        // call the function
        cloneMegamenu();
        highlightSubMenu();


        // add animation on the logo when the page loads
        var navLogo = $('.navbar .logo img');
        setTimeout(function() {
            navLogo.removeClass('visibility-hidden').addClass('animated bounceInDown');
        }, 1000);
        // set the state open/close for the mobile menu
        $(".menu-burger").click(function() {
            $('body').toggleClass('sliding-menu-open sliding-menu-close');
        });

        // set the properties for the slick slider
        $('#list-artist > .slicky').slick({
            autoplay: true,
            autoplaySpeed: 5000
        });

        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
        $('#sosial .gallery.desktop').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3
        });
        $('#sosial .gallery.mobile').slick();
        $('.video-list').slick({
            draggable: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });


        $.ajax({
                url: 'json/gallery.json',
                dataType: 'text'
            })
            .success(function(data) {
                var data = $.parseJSON(data);
                var mobile = '.photo-gallery.mobile #gallery';
                var desktop = '.photo-gallery.desktop #gallery';
                var common = '.photo-gallery.common #gallery'

                $.each(data, function(i) {
                    var num = i + 1;
                    var htmlDesktop = '<div class="tile ' + data[i].class + '"><img class="img-responsive" src="asset/images/gallery/indosiar21-' + data[i].name + '.jpg" alt="behind-the-scene-' + num + '"></div>';
                    var htmlMobile = '<div class="tile"><img class="img-responsive" src="asset/images/gallery/indosiar21-' + data[i].name + '.jpg" alt="behind-the-scene-' + num + '"></div>';

                    doIsotope(desktop);
                    $(desktop).append(htmlDesktop);
                    $(mobile).append(htmlMobile);
                    $(common).append(htmlMobile);

                }); //$.each

                // add slick feature for mobile gallery
                $(mobile).slick({
                    draggable: true
                });
                $(common).slick({
                    draggable: true,
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true,
                    responsive: [{
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true
                        }
                    }, {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    }, {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }]
                });

            }); //ajax success
        $.ajax({
            url: 'json/vod.json',
            dataType: 'text'
        }).success(function(data) {
            var data = $.parseJSON(data).reverse(); //parse it and reverse the order
            $.each(data, function(i) {
                var num = i + 1;
                var htmlDesktop = '<div class="vod-content-tile col-xs-12 col-sm-3"><a target="_blank" href="segment/' + data[i].link + '"><div class="vod-content-vid"><img class="img-responsive" src="asset/images/vod/' + data[i].name + '.png"></div><div class="vod-content-title">' + data[i].title + '</div></a></div>';
                $('#vod .content').append(htmlDesktop);
            }); //$.each
            wrapSlick();
        });
    });
