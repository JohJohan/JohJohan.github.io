$(function($) {
    // functions
    var skillbarstarted = false;
    function skillbar() {
        if(!skillbarstarted){
            $('.skillbar').each(function(){
                var percent = $(this).attr('data-percent'),
                    percentw = percent.replace('%', '');

                $(this).find('.skill-bar-percent').countTo({
                    from: 0,
                    to: percentw,
                     speed: 6000,
                });
        		$(this).find('.skillbar-bar').animate({
        			width: percent
        		},6000);
        	});
        }
        skillbarstarted = true;

    }

    function pie_chart() {
        if(!skillbarstarted){
            $(".pie-chart").each(function() {

                $(this).easyPieChart({
                    animate: 3000,
                    lineCap: "square",
                    lineWidth: $(this).attr("data-line-width"),
                    size: $(this).attr("data-size"),
                    barColor: $(this).attr("data-bar-color"),
                    trackColor: $(this).attr("data-track-color"),
                    scaleColor: "transparent",
                    onStep: function(from, to, percent) {
                        $(this.el).find(".pie-chart-percent .value").text(Math.round(percent));
                    }
                });

            });
        }
        skillbarstarted = true;
    }

    function animate(option){
        var once    = ( option.once ) ? true : false,
        offset  = (option.offset) ? option.offset : '80%';
            option.items.each( function() {
              var element = $(this),

                  AnimationClass = element.attr('animation'),
                  AnimationDuration = element.attr('animation-duration'),
                  AnimationDelay = element.attr('animation-delay');


                  element.css({
                    '-webkit-animation-delay':  AnimationDelay,
                    '-moz-animation-delay':     AnimationDelay,
                    '-ms-animation-delay':      AnimationDelay,
                    '-o-animation-delay':       AnimationDelay,
                    'animation-delay':          AnimationDelay
                  });

                  element.css({
                    '-webkit-animation-duration':  AnimationDuration,
                    '-moz-animation-duration':     AnimationDuration,
                    '-ms-animation-duration':      AnimationDuration,
                    '-o-animation-duration':       AnimationDuration,
                    'animation-duration':          AnimationDuration
                  });


                  element.waypoint(function(direction) {

                    if(direction == 'up') {
                        if(!once){
                            element.removeClass('animated').removeClass(AnimationClass);
                        }
                    } else {
                        element.addClass('animated').addClass(AnimationClass);

                    }

                    },{
                        offset: offset
                  });
            });
        }


	$(document).ready(function() {
        if($(this).scrollTop() > 100) {
            $('.scrollup').addClass('active');
        } else {
            $('.scrollup').removeClass('active');
        }

        $('.btn-cta').click(function(){
            $('.lees-meer').addClass('active');
            $('html,body').animate({
            scrollTop: $('.lees-meer').offset().top},
            700);
            $(this).fadeOut(300).delay(300).remove();


        });

        $('a[href="#contact"]').click(function(){
            event.preventDefault();
            window.scrollTo(0,document.body.scrollHeight);
        });
        // Start tooltip
        $('[data-toggle="tooltip"]').tooltip();

        var $root = $('html, body');
        $('a[href*=#]').click(function() {
            var href = $.attr(this, 'href');
            if(href == "#contact") {
                event.preventDefault();
                $root.animate({
                    scrollTop: $(document).height()
                }, 600, function () {
                    window.location.hash = href;
                });
                return false;
            } else {
                $root.animate({
                    scrollTop: $(href).offset().top - 50
                }, 600, function () {
                    window.location.hash = href;
                });
                return false;
            }
        });
        // Start radomposition
        if (screen.width > 768) {
            var ipadCss = document.createElement("script");
            ipadCss.type = "text/javascript";
            ipadCss.src = "../js/radomposition.js";
            document.body.appendChild(ipadCss);
        }

        $('.scrollup').on('click', function() {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
        animate({
            items : $('.animate'),
            once : false,
            offset :'100%'
        });


       $('.form-toggle-icon').click(function(){
           event.preventDefault();
           $(this).fadeOut().remove();
       });


    });

    $(window).on('scroll', function() {
        var windowW = $(window).width(),
            windowH = $(window).height(),
            largeH = $('.large-window').offset().top,
            wScroll = $(this).scrollTop();

        if(wScroll > 100) {
            $('.scrollup').addClass('active');
        } else {
            $('.scrollup').removeClass('active');
        }

        if(wScroll > 100){
            $('.navbar-default').addClass('active');
        } else {
            $('.navbar-default').removeClass('active');
        }
        if(wScroll > ($('.pie-charts').offset().top / 3 )){
            $('.form-toggle-icon').addClass('active');

        } else {
            $('.form-toggle-icon').removeClass('active');
            if($('.form-toggle-icon').hasClass('form-open')){
                $('.form-toggle-icon').removeClass('form-open');
            }
        }
        if(wScroll > ($('.pie-charts').offset().top - windowH + 0 )){
            pie_chart();
        }


        // Large window
        if(wScroll > largeH - windowH){
            largeH = largeH - 75;
            $('.large-window').css({'background-position': '55% ' + (windowH - largeH  +'px')});

            var opacity = (wScroll - largeH + 400) / (wScroll / 3);
            if(opacity <= 0) {
                opacity = 0;
            }
            if(opacity >= 1){
                opacity = 1;
            }
            $('.window-tint').css({'opacity' : opacity});
        }
    });



});
