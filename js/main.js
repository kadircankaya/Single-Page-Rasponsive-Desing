$(document).ready(function() {
    $('.sc').click(function(e) {
        //set to variable target class name 
        var target = $(this).attr("href");
        //scroll to target
        e.preventDefault();
        $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
        });


    //open side menu 
    $('.side').click(function() {
    	$('.menu').animate({
    		left:"0px"
    	}, 200);

    	$('body').animate({
    		'margin-left':'133px'
    	}, 200);

    });

    //closed side menu
    $('.close').click(function() {
    	$('.menu').animate({
    		left:"-133px"
    	}, 200);

    	$('body').animate({
    		'margin-left':'0px'
    	}, 200);
    });
    });