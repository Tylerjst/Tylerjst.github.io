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


        $(window).scroll(function(){
                if($(window).scrollTop() > $(window).height()){
                    $(".nav").css({"background-color":"transparent"});
                }
                else{
                    $(".nav").css({"background-color":"white"});
                }

            });
            $('#fun').hide();





// $('.contact').particleground({
//     dotColor: '#5cbdaa',
//     lineColor: '#5cbdaa'
//   });



    // $('.circle').hide();
    // $('.fa-plus').hover(function(){
    //   $('.circle').show('slow');
    // },
    //   function(){$('.circle').hide('slow');;
    // });


});
