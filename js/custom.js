$(function(){
    $('.main_visual .main_visual_slide').slick({
        arrows: false,
        autoplaySpeed: 4000,
        
    });

    $('.main_regular .main_regular_slide').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
    });
    $('.main_event .main_event_slide').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows:false,
    });

    $('.main_company .main_company_slide').slick({
        slidesToShow: 9,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
    });

})