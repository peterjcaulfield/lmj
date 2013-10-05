$(document).ready(function(){

    $('#nav a').click(function(e){
      
        e.preventDefault();
        
        $('.active').removeClass('active');

        $(this).addClass('active');
      
      
      });
    
    
    
});
