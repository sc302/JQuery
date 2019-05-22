// JavaScript source code

$(document).ready(function () {

    $('#btn3').click(function () {
        $("#tbl").animate(
            {
                padding: '20px',
                fontsize: '30px'
            }, 2000);
    });


    $('#navigation li').hover(function () {
        $(this).animate({
            paddingLeft: '+=15px'
        }, 200);
    },
        function () {
            $(this).animate({
                paddingLeft: '-=30px'
            }, 200);
        });
});
