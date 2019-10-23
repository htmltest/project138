$(document).ready(function() {

    $('.info-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        adaptiveHeight: true
    });

});

$(window).on('load', function() {
    $('html').addClass('animate');
});