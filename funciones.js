var launcher_organizacion_metodos = document.querySelector("#launcher_organizacion_metodos");
var take_info_organizacion_metodos = document.querySelector(".caja_info_organizacion_metodos p");

var launcher_lenguaje_programacion_martes = document.querySelector("#launcher_lenguaje_programacion_martes");
var take_info_lenguaje_programacion_martes = document.querySelector(".caja_info_lenguaje_programacion_martes p");

var launcher_ingles = document.querySelector("#launcher_ingles");
var take_info_ingles = document.querySelector(".caja_info_ingles p");

var launcher_sistemas_informacion = document.querySelector("#launcher_sistemas_informacion");
var take_info_sistemas_informacion = document.querySelector(".caja_info_sistemas_informacion p");

var launcher_actividades_complementarias_tecnologia = document.querySelector("#launcher_actividades_complementarias_tecnologia");
var take_info_actividades_complementarias_tecnologia = document.querySelector(".caja_info_actividades_complementarias_tecnologia p");

var launcher_lenguaje_programacion_jueves = document.querySelector("#launcher_lenguaje_programacion_jueves");
var take_info_lenguaje_programacion_jueves = document.querySelector(".caja_info_lenguaje_programacion_jueves p");

var launcher_matematica = document.querySelector("#launcher_matematica");
var take_info_matematica = document.querySelector(".caja_info_matematica p");

var launcher_estructura_datos = document.querySelector("#launcher_estructura_datos");
var take_info_estructura_datos = document.querySelector(".caja_info_estructura_datos p");


var boton_click = document.querySelector("#sonido_boton");


launcher_organizacion_metodos.addEventListener("click",function(){                                            
  boton_click.play();
  Swal.fire({
    title: 'Información!',
    text: take_info_organizacion_metodos.innerHTML,
    icon: 'info',
    confirmButtonText: 'Vale!'
  })
});

launcher_lenguaje_programacion_martes.addEventListener("click",function(){
  boton_click.play();
  Swal.fire({
    title: 'Información!',
    text: take_info_lenguaje_programacion_martes.innerHTML,
    icon: 'info',
    confirmButtonText: 'Vale!'
  })
});




launcher_ingles.addEventListener("click",function(){
  boton_click.play();
  Swal.fire({
    title: 'Información!',
    text: take_info_ingles.innerHTML,
    icon: 'info',
    confirmButtonText: 'Vale!'
  })
});




launcher_sistemas_informacion.addEventListener("click",function(){
  boton_click.play();
  Swal.fire({
    title: 'Información!',
    text: take_info_sistemas_informacion.innerHTML,
    icon: 'info',
    confirmButtonText: 'Vale!'
  })
});




launcher_actividades_complementarias_tecnologia.addEventListener("click",function(){
  boton_click.play();
  Swal.fire({
    title: 'Información!',
    text: take_info_actividades_complementarias_tecnologia.innerHTML,
    icon: 'info',
    confirmButtonText: 'Vale!'
  })
});



launcher_lenguaje_programacion_jueves.addEventListener("click",function(){
  boton_click.play();
  Swal.fire({
    title: 'Información!',
    text: take_info_lenguaje_programacion_jueves.innerHTML,
    icon: 'info',
    confirmButtonText: 'Vale!'
  })
});




launcher_matematica.addEventListener("click",function(){
  boton_click.play();
  Swal.fire({
    title: 'Información!',
    text: take_info_matematica.innerHTML,
    icon: 'info',
    confirmButtonText: 'Vale!'
  })
});




launcher_estructura_datos.addEventListener("click",function(){
  boton_click.play();
  Swal.fire({
    title: 'Información!',
    text: take_info_estructura_datos.innerHTML,
    icon: 'info',
    confirmButtonText: 'Vale!'
  })
});
