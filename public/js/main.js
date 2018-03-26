/*global $, jQuery, alert*/

$(document).ready(function () {
    // -> For tooltips
    // ------------------------------
    $('[data-toggle="tooltip"]').tooltip();
    
    // -> Dismiss Alert
    // ------------------------------
    // $(".alert").alert()

    //owl-carousel slider
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            }
        }
    })


    //nav fixed
    $(window).on('scroll', function () {

        if ($(window).scrollTop() > 70) {
            $('#navigation').addClass('fixed');
            $('.navbar-default .navbar-nav>li>a').css({
                'color': 'black',
                
            });
            $('.consultation a').css({
                'border': '1px solid black',
                'color': 'black'
            });
            $(".consultation a").on({
                mouseenter: function () {
                    $(this).css({
                        'border': 'none',
                        'color': 'white',
                        'background': '#0281f0!important'
                    });
                },
                mouseleave: function () {
                    $(this).css({
                        'border': '1px solid black',
                        'color': 'black'
                    })
                }
            });

            $('.logo img').attr('src', 'images/log.png');
            
            $('.logo img').css({
                'margin-top': '30px'
            });
            $('.consultation').css({
                'padding-top': '30px'
            });
        } else {
            $('#navigation').removeClass('fixed');
            $('.navbar-default .navbar-nav>li>a').css({
                'color': 'white'
            });
            $('.consultation a').css({
                'border': '1px solid white',
                'color': 'white'
            });
            $(".consultation a").on({
                mouseenter: function () {
                    $(this).css({
                        'border': 'none',
                        'color': 'white',
                        'background': '#0281f0!important'
                    });
                },
                mouseleave: function () {
                    $(this).css({
                        'border': '1px solid white',
                        'color': 'white'
                    })
                }
            });
            
            $('.logo img').attr('src', 'images/log.png');

        
            $('.logo img').css({
                'margin-top': '30px'
            });
            $('.consultation').css({
                'padding-top': '20px'
            });
        }
    });



    //introdcution-button
    $('#more1').on('click', function () {
        $('html,body').animate({
            scrollTop: $("#about").offset().top - 65
        }, 1000);
    });
    

    // Add scrollspy to <body>
    $('body').scrollspy({
        target: "#navigation",
        offset: 80
    });

    // Add smooth scrolling on all links inside the navbar
    $("#navigation a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 97
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });

        } // End if

    });

    //show color option box
    $('.gear-check').on('click', function () {

        $('.color-option').fadeToggle();

    })

    // Color choice option
    // ------------------------------
    $('.color-option ul li')
        .eq(0).css("backgroundColor", "#0281f0").end()
        .eq(1).css("backgroundColor", "green").end()
        .eq(2).css("backgroundColor", "#ff9800").end()
        .eq(3).css("backgroundColor", "red");

    //change all color by choose in color tool box
    $('.color-option ul li').on('click', function () {


        $("link[href*='themes']").attr("href", $(this).attr("data-value"));

    });
    
    //scoll to top 
    
    var scrollButton = $("#to-top");
    $(window).scroll(function(){
        
        if( $(this).scrollTop() >= 700 )
            
        {
            scrollButton.show();  
        }
        else 
        { 
            scrollButton.hide();
        }
            
    });
    
    scrollButton.on('click',function () {
               
            $('html,body').animate({scrollTop : 0},600);
              
        });
        




});