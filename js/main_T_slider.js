/*Tablet*/
$('.T_slider > .T_pages > div').click(function() {
    var $this = $(this);
    var $slider = $this.closest('.T_slider');
    
    $this.addClass('T_active');
    $this.siblings('.T_active').removeClass('T_active');
    
    var index = $this.index();
    
    $slider.find(' > .T_slides > .T_active').removeClass('T_active');
    $slider.find(' > .T_slides > div').eq(index).addClass('T_active');
});

$('.T_slider > .T_side-btns > div').click(function() {
    var $this = $(this);
    var index = $this.index();
    var $slider = $this.closest('.T_slider');
    
    var $current = $slider.find('.T_pages > div.T_active');
    var $post;
    
    if ( index == 0 ) {
        $post = $current.prev();
    }
    else {
        $post = $current.next();
    }
    
    if ( $post.length == 0 ) {
        if ( index == 0 ) {
            $post = $slider.find('.T_pages > div:last-child');
        }
        else {
            $post = $slider.find('.T_pages > div:first-child');
        }
    }
    
    $post.click();
});

function Slider1__moveNext() {
    var $slider = $('.T_slider-1');
    var $nextBtn = $slider.find('.T_side-btns > div:last-child');
    $nextBtn.click();
}

setInterval(Slider1__moveNext, 3000);