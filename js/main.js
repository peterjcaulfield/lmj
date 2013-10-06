$(document).ready(function(){

    $('#nav a').click(function(e){
      
        e.preventDefault();
       
        var elem = $(this);

        $('.active').removeClass('active');

        elem.addClass('active');
     
        var sectionId = '#' + elem.attr('href');

        console.log(sectionId);

        $('.active-section').fadeOut(500);

        $('.active-section').removeClass('active-section');

        $(sectionId).fadeIn(500);

        $(sectionId).addClass('active-section');
      
      
      });
    
    
    
});
