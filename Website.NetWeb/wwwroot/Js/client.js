$(function () {
    // preload audio
    var toast = new Audio('media/toast.wav');

    $('.code').on('click', function (e) {
        e.preventDefault();

        //change values in box
        $('#product').html($(this).data('product'));
        $('#code').html($(this).data('code'));
        $('#toast').toast({ autohide: false }).toast('show');
        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        // play audio
        toast.play();
        $('#toast').toast({ autohide: false }).toast('show');
    });
    //close on esc key press
    $(document).on('keyup', function (e) {
        if (e.key === "Escape") {
            $('#toast').toast('hide');
        }
    });
});