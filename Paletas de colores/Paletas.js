
//PALETA DE COLORES----------------------------------------------------------------------------------------------------------
let active = true

function Paleta_1(){



}
if (active == true){

//PALETA: GENERAL//

let paleta_general = document.querySelector(".General");
paleta_general.style.cssText ="background-image: linear-gradient(to bottom, #30043d, #b8013e)";

//--------------//

//PALETA: TITULO//

let paleta_titulo = document.querySelector("#titulo")
paleta_titulo.style.color = "#fdb36a";

//--------------//

//PALETA: SEMANA//

let paleta_semana = document.querySelector("#semana")
paleta_semana.style.color = "#fdb36a";

//--------------//

//PALETA: DÍAS//

let paleta_dia = document.querySelectorAll(".caja_dias .dia")
for(i=0; i< paleta_dia.length;i++){
paleta_dia[i].style.cssText = "background-color: #30043d; border-color: #b8013e;"
}
//--------------//

//PALETA: H3//

let paleta_h3 = document.querySelectorAll("h3")
for(i=0;i<paleta_h3.length;i++){
paleta_h3[i].style.color = "#ffffff";
}
//--------------//

//PALETA: HR//

let paleta_hr = document.querySelectorAll("hr")

for(i=0;i<paleta_hr.length;i++){
paleta_hr[i].style.cssText = "border-top-color: #e54059; border-bottom-color:#e54059;";
}
//--------------//

//PALETA: H4//

//let paleta_h4 = document.querySelectorAll("h4")
//for(i=0;i<paleta_h4.length;i++){
//paleta_h4[i].style.color = "#fdb36a";
//}
//--------------//

//PALETA: SPAN//

let paleta_span = document.querySelectorAll("span")
for(i=0;i<paleta_span.length;i++){
paleta_span[i].style.color = "#e54059";
}
//--------------//

//PALETA: BOTONES; FONDO, BORDES, TEXTO, HOVER//

let paleta_button = document.querySelectorAll("button");
let paleta_button_h4 = document.querySelectorAll("button h4");
for (let i = 0; i < paleta_button.length; i++) {
  paleta_button[i].style.cssText = "background-color: #30043d; border-color: #b8013e;";
  paleta_button_h4[i].style.color = "#fdb36a";

  function handleMouseDown() {
    paleta_button[i].style.borderColor = "#fdb36a";
  }

  function handleMouseUp() {
    paleta_button[i].style.borderColor = "#b8013e";
  }

  function hover_on() {
    paleta_button_h4[i].style.color = "#e54059";
  }

  function hover_off(){
    paleta_button_h4[i].style.color = "#fdb36a";
  }

  paleta_button[i].addEventListener("mousedown", handleMouseDown);
  paleta_button[i].addEventListener("mouseup", handleMouseUp);
  paleta_button_h4[i].addEventListener("mouseover", hover_on);
  paleta_button_h4[i].addEventListener("mouseout", hover_off);
}

//--------------//

//PALETA: I//

let paleta_i = document.querySelectorAll("i");

for(i=0;i<paleta_i.length;i++){
    paleta_i[i].style.color = "#ffffff";
    }

//--------------//

//PALETA: A//

let paleta_a = document.querySelectorAll("a");

for(i=0;i<paleta_a.length;i++){
    paleta_a[i].style.color = "#ffffff";
    }


//--------------//

//PALETA: SWEET ALERT TITLE//

let paleta_swal2_title = document.querySelector(".swal2-title");

//--------------//

}