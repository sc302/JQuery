// JavaScript source code

$(document).ready(function () {
//bir tane input button yarat
//par id elementden sonra, buton yarat.
//dinamik
$('<input type="button" id="goster" value="Toggle"/>').insertBefore('#par');

$('#goster').click(function(){
    $('#par').toggle();
});


 
});