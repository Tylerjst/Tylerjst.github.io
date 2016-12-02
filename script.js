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
        
        
    
    
    
    });
    
     $('.work-btn').click(function(){
         $('#fun').hide();
        $('#work').show();
         $('.fun').hide('fast');
         $('.work').show('fast');
         $('.mas-info').css('background-color', 'rgba(204,204,204,1)').css('transition-duration','.25s');
          
    });
    
    $('.dropdown-toggle').dropdown();
    




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
    
    
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

// MIT license

(function() {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||
      window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame)
    window.requestAnimationFrame = function(callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function() {
          callback(currTime + timeToCall);
        },
        timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };

  if (!window.cancelAnimationFrame)
    window.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
}());

(function() {

    // Get the buttons.
    var startBtn = document.getElementById('button');
    /*var resetBtn = document.getElementById('resetBtn');*/
    // A variable to store the requestID.
    var requestID;
    // Canvas
    var canvas = document.getElementById('canvas');
	// 2d Drawing Context.
	var ctx = canvas.getContext('2d');

	// Variables to for the drawing position and object.
	var posX = 0;
	var W =220;
  var H = 60;
  var circles = []; 
  
  //Get canvas size
  canvas.width = 246;
  canvas.height = 60; 

	// Animate.
	function animate() {
		requestID = requestAnimationFrame(animate);
    //Fill canvas with black color
    //ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "rgba(0,0,0,0.15)";
    ctx.fillRect(0, 0, W, H);

    //Fill the canvas with circles
    for(var j = 0; j < circles.length; j++){
      var c = circles[j];

      //Create the circles
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.radius, 0, Math.PI*2, false);
          ctx.fillStyle = "rgba("+c.r+", "+c.g+", "+c.b+", 0.5)";
      ctx.fill();

      c.x += c.vx;
      c.y += c.vy;
      c.radius -= .02;

      if(c.radius < 0)
        circles[j] = new create();
    }
    
     
		
	}
  
 //Random Circles creator
      function create() {

        //Place the circles at the center

        this.x = W/2;
        this.y = H/2;


        //Random radius between 2 and 6
        this.radius = 2 + Math.random()*3; 

        //Random velocities
        this.vx = -5 + Math.random()*10;
        this.vy = -5 + Math.random()*10;

        //Random colors
        this.r = Math.round(Math.random())*255;
        this.g = Math.round(Math.random())*255;
        this.b = Math.round(Math.random())*255;
      }

      for (var i = 0; i < 500; i++) {
        circles.push(new create());
      }

	// Event listener for the start button.
	startBtn.addEventListener('mouseover', function(e) {
		e.preventDefault();

		// Start the animation.
		requestID = requestAnimationFrame(animate);
	});


	// Event listener for the stop button.
	startBtn.addEventListener('mouseout', function(e) {
		e.preventDefault();

		// Stop the animation;
		cancelAnimationFrame(requestID);
    
    e.preventDefault();

		// Reset the X position to 0.
		posX = 0;

		// Clear the canvas.
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// Draw the initial box on the canvas.
		ctx.fillRect(posX, 0, boxWidth, canvas.height);
    
	});
  
  
	/*// Event listener for the reset button.
	resetBtn.addEventListener('click', function(e) {
		e.preventDefault();

		// Reset the X position to 0.
		posX = 0;

		// Clear the canvas.
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// Draw the initial box on the canvas.
		ctx.fillRect(posX, 0, boxWidth, canvas.height);
	});*/


}());    
    
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

setInterval(updateGradient,10);
/* End */

});
