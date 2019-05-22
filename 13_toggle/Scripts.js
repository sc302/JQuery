// JavaScript source code

$(document).ready(function () {
    $('#goster').click(function(){
     //   $('#mytable').toggle();
        $('#mytable tbody tr:even').toggle();
    })

    $('#goster1').click(function(){
        $('h2').toggle('slow');
    });

    $('#goster2').click(function(){
        $('h2').animate({width: 'toggle'});
    });
   
});