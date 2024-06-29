
//PALETA DE COLORES----------------------------------------------------------------------------------------------------------


//PALETA: GENERAL//

let paleta_general = document.querySelector(".General");
paleta_general.style.cssText ="background-image: linear-gradient(to bottom, #30043d, #b8013e)";

//--------------//

//PALETA: BOTONES; FONDO Y BORDES//

let paleta_button = document.querySelectorAll("button");
for (let i = 0; i < paleta_button.length; i++) {
  paleta_button[i].style.cssText = "background-color: #30043d; border-color: #b8013e;";

  function handleMouseDown() {
    paleta_button[i].style.borderColor = "#fdb36a";
  }

  function handleMouseUp() {
    paleta_button[i].style.borderColor = "#b8013e";
  }

  paleta_button[i].addEventListener("mousedown", handleMouseDown);
  paleta_button[i].addEventListener("mouseup", handleMouseUp);
}

//--------------//

//PALETA: DÍAS//

let paleta_dia = document.querySelectorAll(".caja_dias .dia")
for(i=0; i< paleta_dia.length;i++){
paleta_dia[i].style.cssText = "background-color: #30043d; border-color: #b8013e;"
}

//--------------//

//PALETA: SWEET ALERT TITLE//

let paleta_swal2_title = document.querySelector(".swal2-title");

//--------------//