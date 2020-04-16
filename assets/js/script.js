$(document).ready(function(){
    $(".detail-slide-coupons").slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true,
        arrows: true,
        prevArrow:"<img class='icon-arrow-back prev slick-prev' src='assets/images/arrows/icn-arrow-back.png'>",
        nextArrow:"<img class='icon-arrow-forward next slick-next' src='assets/images/arrows/icn-arrow-forward.png'>",
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    arrows: true,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 660,
                settings: {
                    arrows: true,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.card-hide').hide();
    $('.coupon-right-list').hide();
    $('.btn-go-to-coupon').click(function () {
        $('.card-show').hide();
        $('.car-calendar-img').hide();
        $('.car-calendar').hide();
        $('.card-hide').show();
        $('.coupon-right-list').show();
    });

    $('.crl-icn-arrow-back').click(function () {
        $('.card-hide').hide();
        $('.coupon-right-list').hide();
        $('.card-show').show();
        $('.car-calendar-img').show();
        $('.car-calendar').show();
    });
});