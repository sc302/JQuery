// JavaScript source code

$(document).ready(function () {
    var cift = $('#mytable tbody tr:even').length;
    var tek = $('#mytable tbody tr:odd').length;
    alert('Tekil SatirSayisi:' + cift +"Cift Satir Sayisi:"+tek);
});