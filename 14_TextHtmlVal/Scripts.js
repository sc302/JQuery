// JavaScript source code

$(document).ready(function () {
   
    $('#degistir').click(function () {
        $('#par').text('Hello');
        $('#txt').val('Mehmet');
        $('#par1').html('<b>HelloWorld</b>');
    })

    $('#gostergizle').click(function () {
        //toogle
        $('#mytable').toggle();
        if ($('#mytable').is(':visible')) {
            $(this).val('Gizle');
        }
        else {
            $(this).val('Göster');
        }
    })


});