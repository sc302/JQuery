// JavaScript source code

$(document).ready(function () {
  $('#getStudent').click(function () {
      var id = $('#studentId').val();

      $.ajax({
          url: 'http://localhost:64589/Home/GetStudent/' + id,
          type: 'POST',
          dataType: 'json',
          success: function (data) {
              console.log(data);

              $("#studentName").html(data.StudentName);
              $("#studentLastName").html(data.StudentLastName);
              $("#avarage").html(data.Avarage);
          },
          error: function () {
              alert("oyle bir ogrenci yok");
          }
      });
  });

});


