
$(document).ready(function () {
    $("#nav1").click(function () {
        $('html,body').animate({
            scrollTop: $("#work").offset().top
        },
            'slow');
    });
});