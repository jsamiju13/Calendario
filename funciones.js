
var botonOrganizacionMetodos = document.querySelector("#botonOrganizacionMetodos");
var datosOrganizacionMetodos = document.querySelector(".datosOrganizacionMetodos .p_desc");
var datosExOrganizacionMetodos = document.querySelector(".datosOrganizacionMetodos .p_descEx");

var botonLenguajeProgramacionMartes = document.querySelector("#botonLenguajeProgramacionMartes");
var datosLenguajeProgramacionMartes = document.querySelector(".datosLenguajeProgramacionMartes .p_desc");
var datosExLenguajeProgramacionMartes = document.querySelector(".datosLenguajeProgramacionMartes .p_descEx");

var botonIngles = document.querySelector("#botonIngles");
var datosIngles= document.querySelector(".datosIngles .p_desc");
var datosExIngles = document.querySelector(".datosIngles .p_descEx");

var botonSistemasInformacion = document.querySelector("#botonSistemasInformacion");
var datosSistemasInformacion = document.querySelector(".datosSistemasInformacion .p_desc");
var datosExSistemasInformacion = document.querySelector(".datosSistemasInformacion .p_descEx");

var botonActividadesComplementarias = document.querySelector("#botonActividadesComplementarias");
var datosActividadesComplementarias = document.querySelector(".datosActividadesComplementarias .p_desc");
var datosExActividadesComplementarias = document.querySelector(".datosActividadesComplementarias .p_descEx");

var botonLenguajeProgramacionJueves = document.querySelector("#botonLenguajeProgramacionJueves");
var datosLenguajeProgramacionJueves = document.querySelector(".datosLenguajeProgramacionJueves .p_desc");
var datosExLenguajeProgramacionJueves = document.querySelector(".datosLenguajeProgramacionJueves .p_descEx");

var botonMatematica = document.querySelector("#botonMatematica");
var datosMatematica = document.querySelector(".datosMatematica .p_desc");
var datosExMatematica = document.querySelector(".datosMatematica .p_descEx");

var botonEstructuraDatos = document.querySelector("#botonEstructuraDatos");
var datosEstructuraDatos = document.querySelector(".datosEstructuraDatos .p_desc");
var datosExEstructuraDatos = document.querySelector(".datosEstructuraDatos .p_descEx");

var correo = document.querySelector(".correo")
var boton_click = document.querySelector("#sonido_boton");

let titleColor = "#ffffff"
let confirmButton ="#000000"
let cancelButton = "#000000"
let color_icon = "#ffffff"
let color_span = "#000000"
let color_background = 'linear-gradient(to bottom, #000000, #ffffff)'



function sweetSimple(datos,dia){
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

function sweet(datos,dia,datosEx){
  Swal.fire({
    title: dia,
    html: datos,
    icon: "info",
    color: titleColor,
    iconColor: color_icon,
    background:color_background,
    showCancelButton: true,
    confirmButtonColor: confirmButton,
    cancelButtonColor: cancelButton,
    confirmButtonText: "Explicame",
    cancelButtonText: "Vale",
    reverseButtons: true,
    showCloseButton: true
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Información Extra:",
        html: datosEx,
        icon: "question",
        iconColor: color_icon,
        color: titleColor,
        background:color_background,
        confirmButtonColor: confirmButton,
      });
    }
  });
};

botonOrganizacionMetodos.addEventListener("click",function(){                                            
  boton_click.play();
  sweet(datosOrganizacionMetodos.innerHTML,"Martes!",datosExOrganizacionMetodos.innerHTML);
});

botonLenguajeProgramacionMartes.addEventListener("click",function(){
  boton_click.play();
  sweet(datosLenguajeProgramacionMartes.innerHTML,"Martes!",datosExLenguajeProgramacionMartes.innerHTML);
});

botonIngles.addEventListener("click",function(){
  boton_click.play();
  sweet(datosIngles.innerHTML,"Miércoles!",datosExIngles.innerHTML);
});

botonSistemasInformacion.addEventListener("click",function(){
  boton_click.play();
  sweet(datosSistemasInformacion.innerHTML,"Miércoles!",datosExSistemasInformacion.innerHTML);
});

botonActividadesComplementarias.addEventListener("click",function(){
  boton_click.play();
  sweet(datosActividadesComplementarias.innerHTML,"Miércoles!",datosExActividadesComplementarias.innerHTML);
});

botonLenguajeProgramacionJueves.addEventListener("click",function(){
  boton_click.play();
  sweet(datosLenguajeProgramacionJueves.innerHTML,"Jueves!",datosExLenguajeProgramacionJueves.innerHTML);
});

botonMatematica.addEventListener("click",function(){
  boton_click.play();
  sweet(datosMatematica.innerHTML,"Jueves!",datosExMatematica.innerHTML);
});

botonEstructuraDatos.addEventListener("click",function(){
  boton_click.play();
  sweet(datosEstructuraDatos.innerHTML,"Viérnes!",datosExEstructuraDatos.innerHTML);
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
  sweetSimple("Si tienes alguna idea o sugerencia, házmelo saber!",correo)
});
