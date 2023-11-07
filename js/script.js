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

const greeting1 = document.getElementById('greeting-1');
const greetings = ["HI THERE !"];
let isDeleting = false;
let txtIndex = 0;

function typeWriter() {
    const currentGreeting = greetings[0];
    const speed = isDeleting ? 50 : 120; // 調整打字速度和刪除速度

    if (!isDeleting && txtIndex <= currentGreeting.length) {
        greeting1.textContent = currentGreeting.substring(0, txtIndex);
        txtIndex++;
    } else if (isDeleting && txtIndex >= 0) {
        greeting1.textContent = currentGreeting.substring(0, txtIndex);
        txtIndex--;
    }

    if (txtIndex > currentGreeting.length) {
        isDeleting = true;
    }

    if (txtIndex === 0 && isDeleting) {
        isDeleting = false;
    }

    setTimeout(typeWriter, speed);
}
typeWriter();
});
