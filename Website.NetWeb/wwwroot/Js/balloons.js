$(function () {
    $('#birthday').pickadate({ format: 'mmmm, d' });
    //random animation
    var rand = Math.round(Math.random() * 8);
    var attentionSeeker = ["heartBeat", "flash", "pulse", "rubberBand", "shake", "swing", "tada", "wobble", "jello"];
    $('#head').addClass(attentionSeeker[rand]);

    $('#toast').hide();
    //update toast
    $('#submit').on('click', function () {
        $('#toast').hide();
        if ($('#red').prop("checked") == false && $('#blue').prop("checked") == false && $('#green').prop("checked") == false) {
            $('#hbName').html("Happy Birthday " + $('#name').val());
            $('#date').html($('#birthday').val());
            $('#toast').toast({ autohide: false }).toast('show');
            $('#toast').show();
            //close on esc key press
            $(document).on('keyup', function (e) {
                if (e.key === "Escape") {
                    $('#toast').toast('hide');
                }
            });
        }
    });

    $('#checkAll').on('click', function () {
        if ($('#red').prop("checked") == true || $('#blue').prop("checked") == true || $('#green').prop("checked") == true) {
            $('.form-check-input').each(function () {
                $(this).prop('checked', false);
                $(this).is(':checked') ?
                    $('#' + this.id + 'Img').removeClass().addClass('animated bounceInDown') :
                    $('#' + this.id + 'Img').addClass('animated bounceOutUp');
            });
        } else {
            $('.form-check-input').each(function () {
                $(this).prop('checked', true);
                $(this).is(':checked') ?
                    $('#' + this.id + 'Img').removeClass().addClass('animated bounceInDown') :
                    $('#' + this.id + 'Img').addClass('animated bounceOutUp');
            });
        }
    });
    //change h1 color
    $('label').on('mouseover', function () {
        $('#head').css("color", $(this).data('color'));
    });

    $('label').on('mouseout', function () {
        $('#head').css("color", "slategrey");
    });

    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });
    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
            $('#' + this.id + 'Img').removeClass().addClass('animated bounceInDown') :
            $('#' + this.id + 'Img').addClass('animated bounceOutUp');
    });
});