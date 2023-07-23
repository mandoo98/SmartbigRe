$(window).scroll(function(){
    if ($(this).scrollTop() > 150) {
        $('.eBook_img').fadeIn(500);
    } else {
        $('.eBook_img').fadeOut(500);
    }
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 880) {
        $('.game_img').fadeIn(500);
    } else {
        $('.game_img').fadeOut(500);
    }
});