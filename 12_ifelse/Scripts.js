// JavaScript source code

$(document).ready(function () {
    $('#goster').click(function(){
    var isvisible = $('#mytable').is(':visible');
    if(isvisible){
        $('#mytable').hide();
    }
    else{
        $('#mytable').show();
    }
    });

    

     
});