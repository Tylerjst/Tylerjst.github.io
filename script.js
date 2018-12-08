$(document).ready(function(){
  



    $('.window').hover(
        function() {
            $(this).parent().parent().children().children('.window-border').animate({
                width: 50
            }, 400).css("background-color", "RGBA(56, 51, 96, 1.00)");
        }, function(){
            $(this).parent().parent().children().children('.window-border').animate({
                width: 0
            }, 400).css("background-color", "#77E2FC");
        } 

    );

});
    
    
    
    
    




    

    
    

