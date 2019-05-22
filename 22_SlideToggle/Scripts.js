// JavaScript source code

$(document).ready(function () {
   $('#btn').click(function(){
       $('h2').slideToggle('slow');
   });
   
   $('#btn1').click(function(){
    $('#par').slideToggle('slow',function(){
        alert("Kaydirma tamamlandi");
    });
});

    $('#btn2').click(function(){
        $('#par').slideUp();
    });
});