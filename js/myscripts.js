/*====================================awkward==================================================*/
$(document).ready(function()
{
    $("#showcase").awShowcase(
        {
            content_width:			590,
            content_height:			330,
            fit_to_parent:			false,
            auto:					false,
            interval:				3000,
            continuous:				false,
            loading:				true,
            tooltip_width:			200,
            tooltip_icon_width:		32,
            tooltip_icon_height:	32,
            tooltip_offsetx:		18,
            tooltip_offsety:		0,
            arrows:					true,
            buttons:				false,
            btn_numbers:			false,
            keybord_keys:			true,
            mousetrace:				false, /* Trace x and y coordinates for the mouse */
            pauseonover:			true,
            stoponclick:			true,
            transition:				'hslide', /* hslide/vslide/fade */
            transition_delay:		300,
            transition_speed:		500,
            show_caption:			'onhover', /* onload/onhover/show */
            thumbnails:				true,
            thumbnails_position:	'outside-last', /* outside-last/outside-first/inside-last/inside-first */
            thumbnails_direction:	'horizontal', /* vertical/horizontal */
            thumbnails_slidex:		1, /* 0 = auto / 1 = slide one thumbnail / 2 = slide two thumbnails / etc. */
            dynamic_height:			false, /* For dynamic height to work in webkit you need to set the width and height of images in the source. Usually works to only set the dimension of the first slide in the showcase. */
            speed_change:			false, /* Set to true to prevent users from swithing more then one slide at once. */
            viewline:				false /* If set to true content_width, thumbnails, transition and dynamic_height will be disabled. As for dynamic height you need to set the width and height of images in the source. */
        });
});

/*===================================awkward_end===================================================*/

//PAGE_FORM

$(document).ready(function(){

    $('#submit_massage').click(function(e){
        e.preventDefault();

        var error = false;
        var name = $('#name').val();
        var phone = $('#phone').val();
        var mail = $('#mail').val();
        var massage_text = $('#massage_text').val();

        if(name.length == 0){
            var error = true;
            $('#name').css({'border': '1px solid red'});
        }else{
            $('#name').css({'border': '1px solid #a3a3a3'});
        }
        if(phone.length == 0) {
            var error = true;
            $('#phone').css({'border': '1px solid red'});
        }else{
            $('#phone').css({'border': '1px solid #a3a3a3'});
        }
        if(mail.length == 0){
            var error = true;
            $('#mail').css({'border': '1px solid red'});
        }else{
            $('#mail').css({'border': '1px solid #a3a3a3'});
        }
        if(massage_text.length == 0){
            var error = true;
            $('#massage_text').css({'border': '1px solid red'});
        }else{
            $('#massage_text').css({'border': '1px solid #a3a3a3'});
        }

        if(error == false){
            $('#submit_massage').attr({'disabled' : 'true', 'value' : 'Sending...' });

            $.post("/send-page-form.php", $("#page_form").serialize(),function(result){
                if(result == 'sent'){
                    $('#cf_submit_p_page').remove();
                    $('#mail_success_page').fadeIn(500);


                }else{
                    $('#mail_fail_page').fadeIn(500);
                    $('#send_message_page').removeAttr('disabled').attr('value', 'Send The Message');
                }
            });
        }
    });
});
/*======================================================================================*/

//TABLE TOOGLE

$(document).ready(function(){

    $(".table_description").css({'display': 'none'});

    $(".complectation_toogle").click(function (){
//                $(".answer p").addid("#answer-active");
        if ($(this).next().next().is(":hidden")) {
            $(this).next().next().show("fast");
            $(this).css({'background-image' : 'url("./img/complectation_turn.png")', 'background-repeat' : 'no-repeat', 'background-position' : 'center', 'text-decoration' : 'none'});
        } else {
            $(this).next().next().hide("fast");
            $(this).css({'background-image' : 'url("./img/complectation_expand.png")', 'background-repeat' : 'no-repeat', 'background-position' : 'center', 'text-decoration' : 'underline'});
        }
        return false;
    });
});

/*======================================================================================*/

//FOTORAMA
/*
// 1. Initialize fotorama manually.
var $fotoramaDiv = jQuery('.fotorama_custom').fotorama();

// 2. Get the API object.
var fotorama = $fotoramaDiv.data('fotorama');


if (jQuery('.fotorama_custom__arr').length > 0) {
    jQuery('.fotorama_custom__arr').remove();
}
jQuery("<div class='fotorama_custom__arr fotorama_custom__arr--prev'><</div>").insertBefore(".fotorama__nav-wrap");
jQuery("<div class='fotorama_custom__arr fotorama_custom__arr--next'>></div>").insertAfter(".fotorama__nav-wrap");



jQuery('.fotorama_custom__arr--prev').click(function () {
    fotorama.show('<');
});
jQuery('.fotorama_custom__arr--next').click(function () {
    fotorama.show('>');
});*/

    /*fotoramaDefaults = {
        maxwidth: '100%',
        nav: 'thumbs',
        thumbwidth: '100px',
        thumbheight: '100px',
        allowfullscreen: true,
        dataarrows: true,
        thumbborderwidth: '2'

    }*/
/*$(document).ready(function() {
    $('.fotorama').fotorama({
        maxwidth: '100%',
        nav: 'thumbs',
        thumbwidth: '100px',
        thumbheight: '100px',
        allowfullscreen: true,
        dataarrows: true,
        transition: 'crossfade',
        navposition: 'bottom',
        transitionduration: 400,
        thumbborderwidth: '2'
    });
});*/




/*======================================================================================*/

$(document).ready(function() {
    $("#first_banner").lightSlider({
        loop:true,
        item:1,
        addClass:'slider_inside_block',
        controls: false,
        auto: true,
        pause: 3000,
        mode: 'slide',
        speed: 1500,
        slideMargin:0
    });
});
$(document).ready(function() {
    $("#second_banner").lightSlider({
        loop:true,
        item:1,
        addClass:'slider_inside_block',
        controls: false,
        auto: true,
        pause: 3000,
        mode: 'slide',
        speed: 1500,
        slideMargin:0
    });
});
$(document).ready(function() {
    $("#gallery_slider").lightSlider({
        loop:true,
        item:1,
        addClass:'slider_inside_block',
        controls: true,
        auto: false,
        pause: 3000,
        mode: 'slide',
        speed: 1500,
        slideMargin:0
    });
});

/*=================bxSlider===================*/
$(document).ready(function(){
    $('.slider1').bxSlider({
        slideWidth: 219,
        minSlides: 2,
        maxSlides: 4,
        moveSlides: 1,
        slideMargin: 30
    });
});
/*=================bxSlider_end===================*/