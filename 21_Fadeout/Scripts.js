// JavaScript source code

$(document).ready(function () {
   $('#btn').click(function(){
       $('h2').fadeOut('slow');
   });
   
   $('#btn1').click(function(){
       $(this).fadeOut();
   });
});