$(document).ready(function() {

    $('.info-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        adaptiveHeight: true
    });

    $('form').validate({
        ignore: '',
        submitHandler: function(form) {
            var formData = new FormData(form);

            $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                processData: false,
                contentType: false,
                dataType: 'html',
                data: formData,
                cache: false
            });

            $('.form').hide();
            $('.success').show();
        }
    });

});

$(window).on('load', function() {
    $('html').addClass('animate');
});