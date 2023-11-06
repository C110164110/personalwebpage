$(document).ready(function(){

 $('#menu').click(function(){
   $(this).toggleClass('fa-times');
   $('header').toggleClass('toggle');
 });

 $(window).on('scroll load',function(){
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
        $('.top').show();
    }else{
        $('.top').hide();
    }
 });

 //smooth scrooling

 $('a[href*="#"]').on('click', function(e) {
    e.preventDefault();
    var target = $($(this).attr('href'));
    if (target.length) {
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 500, 'linear');
    }
});

});