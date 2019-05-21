// JavaScript source code

$(document).ready(function () {
//bir tane input button yarat
//par id elementden sonra, buton yarat.
//dinamik
$('<input type="button" id="goster" value="Toggle"/>').insertAfter('#par');

$('#goster').click(function(){
    $('#par').toggle();
});
//ornek. table, bir alan, sepete ekle diye buton yapin tiklandiginda
//urun adi mesaj box ile gosterilsin. pc eklendi.

 
});