$(document).ready(function(){
  


   var scroll_start = 0;
   var startchange = $('.Moreme');
   var offset = startchange.offset();
   $(document).scroll(function(){ 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.nav').css('background-color', 'rgba(255,255,255,1)').css('transition-duration','.25s');
          $('.poop').css('color','#333').css('transition-duration','.25s');
          $('.navbar-brand').css('color','black').css('transition-duration','.25s');
          $('.navbar').css('border-bottom', '2px solid orange').css('transition-duration','.25s');
          $('.icon-bar').css('background-color', 'black').css('transition-duration','.25s');
       } else {
          $('.nav').css('background-color', 'transparent').css('transition-duration','.25s');
           $('.poop').css('color','rgba(255,255,255,1)').css('transition-duration','.25s');
           $('.navbar-brand').css('color','rgba(255,255,255,1)').css('transition-duration','.25s');
           $('.navbar').css('border-bottom', 'none').css('transition-duration','.25s');
           $('.icon-bar').css('background-color', 'white').css('transition-duration','.25s');
           
       }
   });
    $('.fun').hide();
    $('#fun').hide();
   
    $('.fun-btn').click(function(){
        $('#work').hide();
        $('#fun').show();
        $('.work').hide('fast');
        $('.fun').show('fast');
        $('.mas-info').css('background-color', 'rgba(0,51,102,1)').css('transition-duration','.25s');
        
    
    
    
    });
    
     $('.work-btn').click(function(){
         $('#fun').hide();
        $('#work').show();
         $('.fun').hide('fast');
         $('.work').show('fast');
         $('.mas-info').css('background-color', 'rgba(204,204,204,1)').css('transition-duration','.25s');
          
    });
    
    $('.dropdown-toggle').dropdown()
    





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
