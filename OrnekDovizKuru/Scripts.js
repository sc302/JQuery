// JavaScript source code

$(document).ready(function () {


    $('#btn5').click(function(){
        var items = [];
        $.getJSON('https://www.doviz.gen.tr/doviz_json.asp',function(data)
        {
            $.each( data, function( key, val ) {
                items.push( "<li id='" + key + "'>" + val + "</li>" );
              });
              $( "<ul/>", {
                "class": "my-new-list",
                html: items.join( "" )
              }).appendTo( "body" );
        });
    });

  
});
