$(document).ready(function(){
  


   var scroll_start = 0;
   var startchange = $('.Moreme');
   var offset = startchange.offset();
   $(document).scroll(function(){ 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.nav').css('background-color', 'rgba(255,255,255,1)').css('transition-duration','.25s');
          $('.poop').css('color','#333').css('transition-duration','.25s');
          $('.navbar').css('border-bottom', '2px solid orange').css('transition-duration','.25s');
       } else {
          $('.nav').css('background-color', 'transparent').css('transition-duration','.25s');
           $('.poop').css('color','rgba(255,255,255,1)').css('transition-duration','.25s');
           $('.navbar').css('border-bottom', 'none').css('transition-duration','.25s');
           
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
