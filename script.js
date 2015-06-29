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

    $('#sci').hover(function(){
        $('.subStuff1').removeClass('invisible')
        },
        function(){$('.subStuff1').addClass('invisible')
        });

    $('#wri').hover(function(){
        $('.subStuff2').removeClass('invisible')
        },
        function(){$('.subStuff2').addClass('invisible')
        });

    $('#des').hover(function(){
        $('.subStuff3').removeClass('invisible')
        },
        function(){$('.subStuff3').addClass('invisible')
        });


    $('#sci').click(function(){
        $('.active').slideUp(500);
        $('.active').removeClass('active');
        $('#sci').animate({backgroundColor:"#ffa500"}, 200);
        $('.Science').addClass('active');
        $('.active').slideDown(500);


    });

    $('#wri').click(function(){
        $('.active').slideUp(500);
        $('.active').removeClass('active');

        $('.Writing').addClass('active');
        $('.active').slideDown(500);
    });

    $('#des').click(function(){
        $('.active').slideUp(500);
        $('.active').removeClass('active');

        $('.Design').addClass('active');
        $('.active').slideDown(500);
    });



});
