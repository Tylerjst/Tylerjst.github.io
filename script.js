$(document).ready(function(){
  $('.subStuff1').addClass('invisible');
  $('.subStuff2').addClass('invisible');
  $('.subStuff3').addClass('invisible');

    $('li').hover(function(){
        $(this).css('color','#7DF9FF');
        },
        function(){
            $(this).css('color','white');
        });

    $('.Science').hide();
    $('.Writing').hide();
    $('.Design').hide();




    $('#sci').click(function(){
        $('.active').slideUp(500);
        $('.active').removeClass('active');
        $('.Science').addClass('active');
        $('.active').slideDown(500);

        $('.box-active').removeClass('box-active');
        $('.box-sci').addClass('box-active');

        $('.subStuff1').removeClass('invisible');
        $('.subStuff2').addClass('invisible');
        $('.subStuff3').addClass('invisible');
        // $('.box-sci').css("background-color","orange");
        // $('.box-wri').css("background-color","transparent");
        // $('.box-des').css("background-color","transparent");
    });

    $('#wri').click(function(){
        $('.active').slideUp(500);
        $('.active').removeClass('active');
        $('.Writing').addClass('active');
        $('.active').slideDown(500);

        $('.box-active').removeClass('box-active');
        $('.box-wri').addClass('box-active');

        $('.subStuff1').addClass('invisible');
        $('.subStuff2').removeClass('invisible');
        $('.subStuff3').addClass('invisible');
        // $('.box-wri').css("background-color","orange");
        // $('.box-sci').css("background-color","transparent");
        // $('.box-des').css("background-color","transparent");
    });

    $('#des').click(function(){
        $('.active').slideUp(500);
        $('.active').removeClass('active');
        $('.Design').addClass('active');
        $('.active').slideDown(500);

        $('.box-active').removeClass('box-active');
        $('.box-des').addClass('box-active');

        $('.subStuff1').addClass('invisible');
        $('.subStuff2').addClass('invisible');
        $('.subStuff3').removeClass('invisible');

        // $('.box-des').css("background-color","orange");
        // $('.box-wri').css("background-color","transparent");
        // $('.box-sci').css("background-color","transparent");
    });

    $('.text').hide();
    $('img').hover(function(){
      $(this).next('.text').show('slow');
    },
      function(){$(this).next('.text').hide('slow');
    });

    // $('.circle').hide();
    // $('.fa-plus').hover(function(){
    //   $('.circle').show('slow');
    // },
    //   function(){$('.circle').hide('slow');;
    // });


});
