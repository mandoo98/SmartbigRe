/*Tablet*/
$('button').click(function(){
    var $this = $(this);
    var index = $this.index();
    
    $this.addClass('T_active');
    $this.siblings('button.T_active').removeClass('T_active');
    
    var $outer = $this.closest('#T_outer');
    var $current = $outer.find(' > .T_tabs > .T_tab.T_active');
    var $post = $outer.find(' > .T_tabs > .T_tab').eq(index);
    
    $current.removeClass('T_active');
    $post.addClass('T_active');
    
    $('.T_slider').slick('setPosition');
});

$('.T_slider').slick({
    slidesToShow: 1,
    dots: true,
}); 

/*Mobile*/
$('button').click(function(){
    var $this = $(this);
    var index = $this.index();
    
    $this.addClass('active');
    $this.siblings('button.active').removeClass('active');
    
    var $outer = $this.closest('#outer');
    var $current = $outer.find(' > .tabs > .tab.active');
    var $post = $outer.find(' > .tabs > .tab').eq(index);
    
    $current.removeClass('active');
    $post.addClass('active');
    // 위의 코드는 탭메뉴 코드입니다.
    
    $('.slider').slick('setPosition');
    // 탭 페이지 안에서 slick 사용시 – slick이 첫페이지에 있지 않으면 slick의 첫번째 이미지가 보이지 않고 2번째 부터 도는것을 확인 할 수 있다. 해당 문제는 탭이 active가 된 후 그 페이지에 slick이 있다면 = slick의 위치를 수동으로 새로 고쳐줘야 한다.
});

// 기존 처음의 slick 적용
$('.slider').slick({
    slidesToShow: 1,
    dots: true,
});