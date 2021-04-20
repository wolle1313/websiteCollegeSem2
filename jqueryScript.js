$(".menuB").click(function() {
   let idV = $(this).attr('id');
   $('body, html').animate({
       scrollTop: $(idV).offset().top - $('.menu').height()
   })
})

$(document).scroll(function(){

    if ($('body, html').scrollTop() >= $('header').position().top) {
        $('.menu').css({
            'position': 'fixed',
            'top': '0',
            'left': '0',
        })  
    }
    else (
        $('.menu').css({
            'position': 'absolute',
            'top': '50vh',
            'left': '0',
        })
    )
})