
$(document).ready(function () {
    $("#nav1").click(function () {
        $('html,body').animate({
            scrollTop: $("#work").offset().top
        },
            'slow');
    });

    $("#nav2").click(function () {
        $('html,body').animate({
            scrollTop: $("#resume").offset().top
        },
            'slow');
    });

    $("#nav3").click(function () {
        $('html,body').animate({
            scrollTop: $("#education").offset().top
        },
            'slow');
    });

    $("#nav4").click(function () {
        $('html,body').animate({
            scrollTop: $("#contact").offset().top
        },
            'slow');
    });
});