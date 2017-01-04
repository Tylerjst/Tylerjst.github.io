$(document).ready(function(){
  


   var scroll_start = 0;
   var startchange = $('.Aboutme');
   var offset = startchange.offset();
   $(document).scroll(function(){ 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.nav').css('background-color', 'rgba(255,255,255,1)').css('transition-duration','.25s');
          $('.poop').css('color','#333').css('transition-duration','.25s');
          $('.navbar-brand').css('color','black').css('transition-duration','.25s');
//          $('.navbar').css('border-bottom', '2px solid orange').css('transition-duration','.25s');
          $('.icon-bar').css('background-color', 'black').css('transition-duration','.25s');
       } else {
          $('.nav').css('background-color', 'transparent').css('transition-duration','.25s');
           $('.poop').css('color','rgba(255,255,255,1)').css('transition-duration','.25s');
           $('.navbar-brand').css('color','rgba(255,255,255,1)').css('transition-duration','.25s');
//           $('.navbar').css('border-bottom', 'none').css('transition-duration','.25s');
           $('.icon-bar').css('background-color', 'white').css('transition-duration','.25s');
           
       }
   });
   
    $('.fun-btn').click(function(){
        $('#work').hide();
        $('#fun').show();
        $('.work').hide('fast');
        $('.fun').show('fast');
        
        
    
    
    
    });
    
     $('.work-btn').click(function(){
         $('#fun').hide();
        $('#work').show();
         $('.fun').hide('fast');
         $('.work').show('fast');
         $('.mas-info').css('background-color', 'rgba(204,204,204,1)').css('transition-duration','.25s');
          
    });
    
    $('.dropdown-toggle').dropdown();
    



   
    
/* Gradient */ 
var colors = new Array(
  [62,35,255],
  [60,255,60],
  [255,35,98],
  [45,175,230],
  [255,0,255],
  [255,128,0]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient()
{
  
  if ( $===undefined ) return;
  
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

 $('#gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

//setInterval(updateGradient,10);
/* End */

    
    /* Storyboard header */
    
    $(window).scroll(function() {
  if ($(document).scrollTop() > 100) {
    $('.act').addClass('shrink');
  } else {
    $('.act').removeClass('shrink');
  }
});
    
//    var first = $('.first-act').offset();
//    var second = $('.second-act').offset();
//    var third = $('.third-act').offset();
//    
//    $(window).scroll(function(){
//       if($(document).scrollTop() > first.top){
//        $('.act').removeClass('active-act');
//          $('.act').addClass('active-act');
//        
//       } else {
//        $('.act1').removeClass('active-act');
//    }
//                    
//}); 
//    
//    $(window).scroll(function(){
//       if($(document).scrollTop() > second.top){
//            $('.act').removeClass('active-act');
//           $('.act2').addClass('active-act');
//        
//       } else {
//        $('.act2').removeClass('active-act');
//    }
//                    
//}); 
//    
//    $(window).scroll(function(){
//       if($(document).scrollTop() > third.top){
//            $('.act').removeClass('active-act');
//           $('.act3').addClass('active-act');
//        
//       } else {
//        $('.act3').removeClass('active-act');
//    }
//                    
//}); 
    
    
});
