var launcher_organizacion_metodos = document.querySelector("#launcher_organizacion_metodos")
var take_info_organizacion_metodos = document.querySelector(".caja_info_organizacion_metodos");

var launcher_lenguaje_programacion_martes = document.querySelector("#launcher_lenguaje_programacion_martes")
var take_info_lenguaje_programacion_martes = document.querySelector(".caja_info_lenguaje_programacion_martes");



var launcher_ingles = document.querySelector("#launcher_ingles")
var take_info_ingles = document.querySelector(".caja_info_ingles");

var launcher_sistemas_informacion = document.querySelector("#launcher_sistemas_informacion")
var take_info_sistemas_informacion = document.querySelector(".caja_info_sistemas_informacion");

var launcher_actividades_complementarias_tecnologia = document.querySelector("#launcher_actividades_complementarias_tecnologia")
var take_info_actividades_complementarias_tecnologia = document.querySelector(".caja_info_actividades_complementarias_tecnologia");



var launcher_lenguaje_programacion_jueves = document.querySelector("#launcher_lenguaje_programacion_jueves")
var take_info_lenguaje_programacion_jueves = document.querySelector(".caja_info_lenguaje_programacion_jueves");

var launcher_matematica = document.querySelector("#launcher_matematica")
var take_info_matematica = document.querySelector(".caja_info_matematica");



var launcher_estructura_datos = document.querySelector("#launcher_estructura_datos");
var take_info_estructura_datos = document.querySelector(".caja_info_estructura_datos");



var give_info_Información = document.querySelector(".caja_info_Información");
var give_elements_original = give_info_Información.innerHTML;

var boton_click = document.querySelector("#sonido_boton");

document.addEventListener('DOMContentLoaded', function() {
  var div = document.getElementById('estrella_1');
  div.addEventListener('click', function() {
    alert('Agradecimientos especiales: \n Juan Lago');
  });
});

launcher_organizacion_metodos.addEventListener("click",function(){
  boton_click.play();
  give_info_Información.innerHTML = take_info_organizacion_metodos.innerHTML
});



launcher_lenguaje_programacion_martes.addEventListener("click",function(){
  boton_click.play();
  give_info_Información.innerHTML = take_info_lenguaje_programacion_martes.innerHTML
  Swal.fire({
    title: "The Internet?",
    text: "That thing is still around?",
    icon: "question"
  });
});




launcher_ingles.addEventListener("click",function(){
  boton_click.play();
  give_info_Información.innerHTML = take_info_ingles.innerHTML
});




launcher_sistemas_informacion.addEventListener("click",function(){
  boton_click.play();
  give_info_Información.innerHTML = take_info_sistemas_informacion.innerHTML
});




launcher_actividades_complementarias_tecnologia.addEventListener("click",function(){
  boton_click.play();
  give_info_Información.innerHTML = take_info_actividades_complementarias_tecnologia.innerHTML
});



launcher_lenguaje_programacion_jueves.addEventListener("click",function(){
  boton_click.play();
  give_info_Información.innerHTML = take_info_lenguaje_programacion_jueves.innerHTML
});




launcher_matematica.addEventListener("click",function(){
  boton_click.play();
  give_info_Información.innerHTML = take_info_matematica.innerHTML
});




launcher_estructura_datos.addEventListener("click",function(){
  boton_click.play();
  give_info_Información.innerHTML = take_info_estructura_datos.innerHTML
});


