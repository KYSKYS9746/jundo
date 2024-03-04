$(function () {

    $(function () {
        $('.mopen').on('click', function () {
            $('.gnb').toggleClass('on');
            $(this).find('.hamburger').toggleClass('is-active');
        })
    })

    $('.main_visual .main_visual_slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        fade: true,
    });



    $('.main_company .main_company_slide').slick({
        slidesToShow: 9,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    pauseOnHover: false
                }
            }
        ]
    });

    $('.main_regular .content_tab .tab_menu li a').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).parent().index();
        $('.main_regular .content_tab .tab_menu li a').removeClass('on')
        $('.main_regular .content_tab .tab_menu li a').eq(idx).addClass('on')

        console.log(idx); // 0 , 1 , 2
        $('.main_regular .tab_content li').removeClass('on');
        $('.main_regular .tab_content li').eq(idx).addClass('on');

    });

    $(function () {
        $(window).on('scroll', function () {
            const scrollHeight = $(window).scrollTop();
            console.log(scrollHeight);
            if (scrollHeight > 0) {
                $('.header').addClass('on')
            } else {
                $('.header').removeClass('on')
            }
        })
    })

})