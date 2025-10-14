$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();

    $(".dropdown-menu li a").filter(function() {
      var nombre = $(this).text().toLowerCase();
      var codigo = $(this).data("codigo") || "";       // si quieres filtrar también por código
      var valores = $(this).data("valores") || "";     // ahora contiene todos los valores de columna 3

      $(this).toggle(
        nombre.indexOf(value) > -1 ||
        codigo.toLowerCase().indexOf(value) > -1 ||
        valores.toLowerCase().indexOf(value) > -1
      );
    });
  });
});