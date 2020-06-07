jQuery(document).ready(function($) {

  // $('.close_btn').css('visibility', 'none');

  $('.menu_btn').click(function(event) {
    $('.sidenav').css({
      transform : 'translateX(0px)',
      transition: 'transform 0.8s ease-in'
    });

    $(this).css('display', 'none');
    $('.close_btn').css('visibility', 'visible').fadeIn('slow');
    
});

  $('.close_btn').click(function(event) {
   
   
   $('.sidenav').css({
      transform : 'translateX(300px)',
      transition: 'transform 0.8s ease-in'
    });

    $(this).css('display', 'none');
    $('.menu_btn').fadeIn('slow');
  });


});
