
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

let titleColor = "#ffffff"
let confirmButton ="#000000"
let color_icon = "#ffffff"
let color_span = "#000000"
let color_background = 'linear-gradient(to bottom, #000000, #ffffff)'


function sweet(datos,dia){
  Swal.fire({
    title: dia,
    confirmButtonColor:confirmButton,
    color: titleColor,
    iconColor: color_icon,
    background:color_background, 
    html: datos,
    icon: 'info',
    confirmButtonText: 'Vale! '

  })
}

launcher_organizacion_metodos.addEventListener("click",function(){                                            
  boton_click.play();
  sweet(take_info_organizacion_metodos.innerHTML,"Martes!");
});

launcher_lenguaje_programacion_martes.addEventListener("click",function(){
  boton_click.play();
  sweet(take_info_lenguaje_programacion_martes.innerHTML,"Martes!");
});

launcher_ingles.addEventListener("click",function(){
  boton_click.play();
  sweet(take_info_ingles.innerHTML,"Miércoles!");
});

launcher_sistemas_informacion.addEventListener("click",function(){
  boton_click.play();
  sweet(take_info_sistemas_informacion.innerHTML,"Miércoles!");
});

launcher_actividades_complementarias_tecnologia.addEventListener("click",function(){
  boton_click.play();
  sweet(take_info_actividades_complementarias_tecnologia.innerHTML,"Miércoles!");
});

launcher_lenguaje_programacion_jueves.addEventListener("click",function(){
  boton_click.play();
  sweet(take_info_lenguaje_programacion_jueves.innerHTML,"Jueves!");
});

launcher_matematica.addEventListener("click",function(){
  boton_click.play();
  sweet(take_info_matematica.innerHTML,"Jueves!");
});

launcher_estructura_datos.addEventListener("click",function(){
  boton_click.play();
  sweet(take_info_estructura_datos.innerHTML,"Viérnes!");
});

/*
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
*/ 

let paleta_menu_paletas = document.querySelector(".caja_botones")
let paleta_menu_paletas_i = document.querySelectorAll(".caja_botones i")
let button_paleta_9 = document.querySelector("#paleta9")
let button_paleta_10 = document.querySelector("#paleta10")
let paleta_active = 1

let paleta1Color = "#e54059"
let paleta2Color = "#F000E8"
let paleta3Color = "#00FFFF"
let paleta4Color = "#001BFF"
let paleta5Color = "transparent"
let paleta6Color = "transparent"
let paleta7Color = "transparent"
let paleta8Color = "transparent"
let paleta9Color = "#000000"

//paleta_i_paleta1 = document.querySelector("#paleta1 i");
//paleta_i_paleta1.style.color =  paleta1Color;
  
  

//paleta_i_paleta2 = document.querySelector("#paleta2 i");
//paleta_i_paleta2.style.color =  paleta2Color;
  
  

//paleta_i_paleta3 = document.querySelector("#paleta3 i");
//paleta_i_paleta3.style.color =  paleta3Color;
  
  

//paleta_i_paleta4 = document.querySelector("#paleta4 i");
//paleta_i_paleta4.style.color =  paleta4Color;
  
  

//paleta_i_paleta5 = document.querySelector("#paleta5 i");
//paleta_i_paleta5.style.color =  paleta5Color;
  
//paleta_i_paleta2 = document.querySelector("#paleta6 i");
//paleta_i_paleta2.style.color =  paleta6Color;
  
  

//paleta_i_paleta3 = document.querySelector("#paleta7 i");
//paleta_i_paleta3.style.color =  paleta7Color;
  
  

//paleta_i_paleta4 = document.querySelector("#paleta8 i");
//paleta_i_paleta4.style.color =  paleta8Color;
  
  

paleta_i_paleta9 = document.querySelector(".caja_botones i");
paleta_i_paleta9.style.color =  paleta9Color;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

let paletaCont = getRandomInt(1,5);

function cambiarColor(paleta){

  if (paleta==1){
      constructor_colores()
  }else{
    if(paleta==2){
        constructor_colores2()
    }else{
      if(paleta==3){
          constructor_colores3()
      }else{
          constructor_colores4()
      }
    }
  }
} 

window.addEventListener("DOMContentLoaded", function(){
  cambiarColor(paletaCont)
})

button_paleta_9.addEventListener("click", function(){

  boton_click.play();
  
  if (paletaCont == 4){
    paletaCont = 1;
  }else{
    paletaCont +=1;
  }

  cambiarColor(paletaCont)
});
button_paleta_10.addEventListener("click", function(){
  boton_click.play();
  sweet("Boton De Ayuda","Ayuda!")
});
