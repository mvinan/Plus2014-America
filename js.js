// libreria de jquerty para modificar los caracteres y tipografias en este caso el span.char1 ... son las letras a modificar

// $(document).ready(function() {
// //ejemplo1: aplicar color a la primer letra de cada palabra
//      $("header .fuente_titulo").lettering()
//      .children("span.char1, span.char7, span.char13").css({'color':'crimson'});
// });


//ejemplo 2: aplicar color a una palabra

// $(document).ready(function() {
//  //ejemplo 2: aplicar color a una palabra
//      $(".fuente_titulo").lettering('words')
//      .children("span.word4").css({'color':'crimson'});
// });


//ejemplo4:: aplicar color a una linea
// $(document).ready(function() {
//      //ejemplo4: aplicar estilos en el css
//       $("header .fuente_titulo").lettering();
// });

// si queremos poner dos efectos en este caso seria de esta manera

$(document).ready(function() {
//ejemplo:aplicamos dos efectos jutnos conjuntamente con css

     $("header .fuente_titulo").lettering("words")
     .children("span.word4").css({'color':'crimson'});



});