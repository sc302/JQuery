// JavaScript source code

$(document).ready(function () {
 
$('<input type="button" id="goster" value="Toggle"/>').appendTo('#par');
$('<strong>!!!!</strong>').prependTo('#par');
$('#goster').click(function(){
    $('#par').toggle();
});

});