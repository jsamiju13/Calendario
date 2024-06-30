
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

let button_paleta_1 = document.querySelector("#paleta1")
button_paleta_1.addEventListener("click", function(){
    boton_click.play();
    constructor_colores();

  });

let button_paleta_2 = document.querySelector("#paleta2")
button_paleta_2.addEventListener("click", function(){
    boton_click.play();
    constructor_colores2();

  });
  
let button_paleta_3 = document.querySelector("#paleta3")
button_paleta_3.addEventListener("click", function(){
  boton_click.play();
  constructor_colores3();

});
  
let button_paleta_4 = document.querySelector("#paleta4")
button_paleta_4.addEventListener("click", function(){
    boton_click.play();
    constructor_colores4();

  });
  
let paleta_menu_paletas = document.querySelector(".caja_paletas")
let paleta_menu_paletas_i = document.querySelectorAll(".caja_paletas i")
let button_paleta_9 = document.querySelector("#paleta9")
let paleta_active = 1

button_paleta_9.addEventListener("click", function(){
  boton_click.play();
  
  for (i=0; i<paleta_menu_paletas_i.length-1;i++){

    paleta_menu_paletas_i[i].style.display = "initial"
  }

  if (paleta_active == 1) {
    paleta_menu_paletas.style.left = "0%"
    button_paleta_9.style.position = "absolute"
    button_paleta_9.style.left = "89.5%"
    button_paleta_9.style.top = "8%"
    paleta_active=0
  }else{

    for (i=0; i<paleta_menu_paletas_i.length-1;i++){

      paleta_menu_paletas_i[i].style.display = "none"
    }
    paleta_menu_paletas.style.left = "-81%"
    button_paleta_9.style.position = "relative"
    button_paleta_9.style.left = "auto"
    button_paleta_9.style.top = "auto"
    paleta_active=1
  }
  



});

let paleta1Color = "#e54059"
let paleta2Color = "#00C48F"
let paleta3Color = "#00FFFF"
let paleta4Color = "#001BFF"
let paleta5Color = "transparent"
let paleta6Color = "transparent"
let paleta7Color = "transparent"
let paleta8Color = "transparent"
let paleta9Color = "#000000"

paleta_i_paleta1 = document.querySelector("#paleta1 i");
paleta_i_paleta1.style.color =  paleta1Color;
  
  

paleta_i_paleta2 = document.querySelector("#paleta2 i");
paleta_i_paleta2.style.color =  paleta2Color;
  
  

paleta_i_paleta3 = document.querySelector("#paleta3 i");
paleta_i_paleta3.style.color =  paleta3Color;
  
  

paleta_i_paleta4 = document.querySelector("#paleta4 i");
paleta_i_paleta4.style.color =  paleta4Color;
  
  

//paleta_i_paleta5 = document.querySelector("#paleta5 i");
//paleta_i_paleta5.style.color =  paleta5Color;
  
//paleta_i_paleta2 = document.querySelector("#paleta6 i");
//paleta_i_paleta2.style.color =  paleta6Color;
  
  

//paleta_i_paleta3 = document.querySelector("#paleta7 i");
//paleta_i_paleta3.style.color =  paleta7Color;
  
  

//paleta_i_paleta4 = document.querySelector("#paleta8 i");
//paleta_i_paleta4.style.color =  paleta8Color;
  
  

paleta_i_paleta9 = document.querySelector("#paleta9 i");
paleta_i_paleta9.style.color =  paleta9Color;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

if (getRandomInt(1,5)==1){
  window.addEventListener("DOMContentLoaded", function(event) {
    constructor_colores()
  });
}else{
  if(getRandomInt(1,5)==2){
    window.addEventListener("DOMContentLoaded", function(event) {
      constructor_colores2()
    });
  }else{
    if(getRandomInt(1,5)==3){
      window.addEventListener("DOMContentLoaded", function(event) {
        constructor_colores3()
      });
    }else{
      window.addEventListener("DOMContentLoaded", function(event) {
        constructor_colores4()
      });
    }
  }
}

