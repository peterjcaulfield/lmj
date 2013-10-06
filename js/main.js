$(document).ready(function(){

    $('#home').addClass('active-section');
    $('#home').css('display', 'block');
   
    var lineArt = '<img src="img/line-art-' + Math.floor((Math.random()*6)+1) + '.png"/>';

    $('#home').append(lineArt);

    $('.nav a').click(function(e){
      
        e.preventDefault();
       
        var elem = $(this);

        $('.active').removeClass('active');

        elem.addClass('active');
     
        var sectionId = '#' + elem.attr('href');
        
        $('.active-section').fadeOut(250, function(){
         
            $('.active-section').removeClass('active-section');

            $(sectionId).fadeIn(250);

            $(sectionId).addClass('active-section');
          
          });
      });
});
