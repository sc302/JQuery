// JavaScript source code

$(document).ready(function () {

  //https://www.doviz.gen.tr/doviz_json.asp
   
  //https://gist.githubusercontent.com/cbmgit/852c2702d4342e7811c95f8ffc2f017f/raw/InsuranceCompanies.json

    $('#btn5').click(function(){
        var items = [];
        $.getJSON('https://gist.githubusercontent.com/cbmgit/852c2702d4342e7811c95f8ffc2f017f/raw/InsuranceCompanies.json',function(data)
        {
            $.each( data["InsuranceCompanies"]["Top Insurance Companies"], function( key, val ) {
                items.push( "<li id='" + key + "'>" + val["Market Capitalization"] + "</li>" );
              });
              $( "<ul/>", {
                "class": "my-new-list",
                html: items.join( "" )
              }).appendTo( "body" );
        });
    });

  
});

/*
 

    $('#btn5').click(function(){
        var items = [];
        $.getJSON('https://gist.githubusercontent.com/cbmgit/852c2702d4342e7811c95f8ffc2f017f/raw/InsuranceCompanies.json',function(data)
        {
            console.log(data["InsuranceCompanies"]["Top Insurance Companies"]);
        });
    }); 
    */
