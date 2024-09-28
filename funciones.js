
var botonMateria1 = document.querySelector("#botonMateria1");
var datosMateria1 = document.querySelector(".datosMateria1 .p_desc");
var datosExMateria1 = document.querySelector(".datosMateria1 .p_descEx");

var botonMateria2 = document.querySelector("#botonMateria2");
var datosMateria2 = document.querySelector(".datosMateria2 .p_desc");
var datosExMateria2 = document.querySelector(".datosMateria2 .p_descEx");

var botonMateria3 = document.querySelector("#botonMateria3");
var datosMateria3= document.querySelector(".datosMateria3 .p_desc");
var datosExMateria3 = document.querySelector(".datosMateria3 .p_descEx");

var botonMateria4 = document.querySelector("#botonMateria4");
var datosMateria4 = document.querySelector(".datosMateria4 .p_desc");
var datosExMateria4 = document.querySelector(".datosMateria4 .p_descEx");

var botonMateria5 = document.querySelector("#botonMateria5");
var datosMateria5 = document.querySelector(".datosMateria5 .p_desc");
var datosExMateria5 = document.querySelector(".datosMateria5 .p_descEx");

var botonMateria6 = document.querySelector("#botonMateria6");
var datosMateria6 = document.querySelector(".datosMateria6 .p_desc");
var datosExMateria6 = document.querySelector(".datosMateria6 .p_descEx");

var botonMateria7 = document.querySelector("#botonMateria7");
var datosMateria7 = document.querySelector(".datosMateria7 .p_desc");
var datosExMateria7 = document.querySelector(".datosMateria7 .p_descEx");

var botonMateria8 = document.querySelector("#botonMateria8");
var datosMateria8 = document.querySelector(".datosMateria8 .p_desc");
var datosExMateria8 = document.querySelector(".datosMateria8 .p_descEx");

var botonMateria9 = document.querySelector("#botonMateria9");
var datosMateria9 = document.querySelector(".datosMateria9 .p_desc");
var datosExMateria9 = document.querySelector(".datosMateria9 .p_descEx");

var correo = document.querySelector(".correo")
var patreon = document.querySelector(".patreon")

var boton_click = document.querySelector("#sonido_boton");
var botonTitulo = document.querySelector("#botonSemana")

let titleColor = "#ffffff"
let confirmButton ="#000000"
let cancelButton = "#000000"
let color_icon = "#ffffff"
let color_background = 'linear-gradient(to bottom, #000000, #ffffff)'

function sweetSimple(datos,dia){
  Swal.fire({
    title: dia,
    confirmButtonColor:confirmButton,
    iconColor: color_icon,
    background:color_background, 
    html: datos,
    icon: 'info',
    confirmButtonText: 'Vale! '

  })
}

function sweet(datos,dia,datosEx,textoConfirmar){
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
    confirmButtonText: textoConfirmar,
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

botonMateria1.addEventListener("click",function(){                                            
  boton_click.play();
  sweet(datosMateria1.innerHTML,"fecha",datosExMateria1.innerHTML,"Explicame");
});

botonMateria2.addEventListener("click",function(){
  boton_click.play();
  sweet(datosMateria2.innerHTML,"Martes!",datosExMateria2.innerHTML,"Explicame");
});

botonMateria3.addEventListener("click",function(){
  boton_click.play();
  sweet(datosMateria3.innerHTML,"Miércoles!",datosExMateria3.innerHTML,"Explicame");
});

botonMateria4.addEventListener("click",function(){
  boton_click.play();
  sweet(datosMateria4.innerHTML,"Miércoles!",datosExMateria4.innerHTML,"Explicame");
});

botonMateria5.addEventListener("click",function(){
  boton_click.play();
  sweet(datosMateria5.innerHTML,"Miércoles!",datosExMateria5.innerHTML,"Explicame");
});

botonMateria6.addEventListener("click",function(){
  boton_click.play();
  sweet(datosMateria6.innerHTML,"Jueves!",datosExMateria6.innerHTML,"Explicame");
});

botonMateria7.addEventListener("click",function(){
  boton_click.play();
  sweet(datosMateria7.innerHTML,"Jueves!",datosExMateria7.innerHTML,"Explicame");
});

botonMateria8.addEventListener("click",function(){
  boton_click.play();
  sweet(datosMateria8.innerHTML,"Viérnes!",datosExMateria8.innerHTML,"Explicame");
});

botonMateria9.addEventListener("click",function(){
  boton_click.play();
  sweet(datosMateria9.innerHTML,"Viérnes!",datosExMateria9.innerHTML,"Explicame");
});

let paleta_menu_paletas = document.querySelector(".caja_botones")
let paleta_menu_paletas_i = document.querySelectorAll(".caja_botones i")
let button_paleta_9 = document.querySelector("#paleta9")
let button_paleta_10 = document.querySelector("#paleta10")
let paleta_active = 1;
let cont = 0;
let paleta9Color = "#000000"

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

let paletaCont = 1

function guardarDatos(){
  localStorage.setItem("color", paletaCont)
}

function setearDatos(){
  paletaCont = Number(localStorage.getItem("color"))
}

setearDatos()

function cambiarColor(paleta){

  setearDatos()

  constructor_colores(paleta)

} 

window.addEventListener("DOMContentLoaded", function(){
  cambiarColor(paletaCont)
})

button_paleta_9.addEventListener("click", function(){

  boton_click.play();
  
  if (paletaCont == 2){
    paletaCont = 1;
  }else{
    paletaCont +=1;
  }

  console.log(paletaCont)

  guardarDatos()

  cambiarColor(paletaCont)
});

button_paleta_10.addEventListener("click", function(){
  boton_click.play();
  sweet("Si tienes alguna idea o sugerencia, házmelo saber!", correo, patreon, "Patrocinar")
});

botonTitulo.addEventListener("click", function(){
  cont++;
  if (cont == 10){
    cont = 1;
    sweetSimple("Felicidades! lo Encontraste","Easter Egg")
  }
});


