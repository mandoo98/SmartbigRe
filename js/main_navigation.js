/*Desktop*/
$(function(){
    $("#slide_open").click(function(){
        $("#D_nav").fadeToggle();
        if($("#burgur").hasClass('on')){
            $("#burgur").removeClass('on');
        } else{
            $("#burgur").addClass('on');
        }
    });
});

/*Tablet*/
$(function(){
    $("#T_slide_open").click(function(){
        $("#T_nav").fadeToggle();
        if($("#T_burgur").hasClass('on')){
            $("#T_burgur").removeClass('on');
        } else{
            $("#T_burgur").addClass('on');
        }
    });
});

/*Mobile*/
$(function(){
    $("#M_slide_open").click(function(){
        $("#M_nav").fadeToggle();
        if($("#M_burgur").hasClass('on')){
            $("#M_burgur").removeClass('on');
        } else{
            $("#M_burgur").addClass('on');
        }
    });
});