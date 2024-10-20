let general = document.querySelector(".General")
let button = document.querySelectorAll("button")
let buttonDias = document.querySelectorAll(".caja_dias button")
let buttonDiasH4 = document.querySelectorAll(".caja_dias button h4")
let spanH4 = document.querySelectorAll("h4 span")
let pSpan = document.querySelectorAll("p span")
let titulo = document.querySelector("#titulo")
let tituloSpan = document.querySelectorAll("#titulo span")
    correo = document.querySelector(".correo")
    patreon = document.querySelector(".patreon")
let hr = document.querySelectorAll("hr")
let h3 = document.querySelectorAll("h3")
let h4 = document.querySelectorAll("h4")
let cajaDia = document.querySelectorAll(".caja_dias .dia")
let cajaBotonesButton = document.querySelectorAll(".caja_botones button")
let iconI = document.querySelectorAll("i")
let iconA = document.querySelectorAll("a")
let botonPaleta = document.querySelectorAll(".caja_botones button")
let botonPaletaI = document.querySelectorAll(".caja_botones i")

//PALETA DE COLORES----------------------------------------------------------------------------------------------------------

function constructor_colores(paleta){

  if (paleta == 1){

  // COLORES //
  /*
  #141E46  rgb(20, 30, 70)
  #C70039  rgb(199, 0, 57)
  #FF6969  rgb(255, 105, 105)
  #FFF5E0  rgb(255, 245, 224)
  #F5EFFF rgb(245, 239, 255)
  */
  //--------------//


  // SWEET ALERT //
  titleColor = "#FFF5E0"
  confirmButton= "#141E46"
  cancelButton= "#FF6969"
  color_icon = "#C70039"
  color_background = 'linear-gradient(to bottom, #141E46, #C70039)'
  for(i=0; i< pSpan.length;i++){
    pSpan[i].style.setProperty("--color", "#141E46")
  }
  //--------------//

  // FONDO //
    general.style.setProperty("--bg-image", 'linear-gradient(to bottom, #141E46, #C70039)')
  //--------------//

  // TITULO //
  titulo.style.setProperty("--color", '#F5EFFF')
  titulo.style.setProperty("--text-shadow", '3px 3px 3px rgba(199, 0, 57, 0.5)')

  for(i=0; i< tituloSpan.length;i++){
    tituloSpan[i].style.setProperty("--color", "#C70039")
  }
  //--------------//

  // CAJAS //
  for(i=0; i< cajaDia.length;i++){
    cajaDia[i].style.setProperty("--bg-color", '#FFF5E0')
    cajaDia[i].style.setProperty("--border-color", 'transparent')
    cajaDia[i].style.setProperty("--box-shadow", '10px 10px 10px rgba(20, 30, 70, 0.5)')
  }

  // H3 //
  for(i=0; i< h3.length;i++){
    h3[i].style.setProperty("--color", "#C70039")
    h3[i].style.setProperty("--text-shadow", '2px 2px 2px rgba(96, 86, 120, 0.5)')
  }
  //--------------//

  // HR //
  for(i=0; i< hr.length;i++){
    hr[i].style.setProperty("--border-top-color", "#141E46")
    hr[i].style.setProperty("--border-bottom-color", "#141E46")
  }
  //--------------//

  // H4 //
  for(i=0; i< h4.length;i++){
    h4[i].style.setProperty("--color", "#141E46")
    h4[i].style.setProperty("--text-shadow", '2px 2px 2px rgba(96, 86, 120, 0.5)')
  }

  for(i=0; i< spanH4.length;i++){
    spanH4[i].style.setProperty("--color", "#C70039")
  }
  //--------------//

  // SPAN //

  //--------------//

  // BOTONES //
  for (let i = 0; i < buttonDias.length; i++) {
    buttonDias[i].style.setProperty("--bg-color", 'transparent')
    buttonDias[i].style.setProperty("--border-color", '#141E46')

    function handleMouseDown() {
      buttonDias[i].style.setProperty("--border-color", '#C70039');
    }

    function handleMouseUp() {
      buttonDias[i].style.setProperty("--border-color", '#141E46');
    }

    function hover_on() {
      buttonDiasH4[i].style.setProperty('--color',"#C70039")
    }

    function hover_off(){
      buttonDiasH4[i].style.setProperty('--color','#141E46');
    }

    buttonDias[i].addEventListener("mousedown", handleMouseDown);
    buttonDias[i].addEventListener("mouseup", handleMouseUp);
    buttonDiasH4[i].addEventListener("mouseover", hover_on);
    buttonDiasH4[i].addEventListener("mouseout", hover_off);
  }

  //--------------//

  // ICONS // 
  for(i=0; i< iconI.length;i++){
    iconI[i].style.setProperty("--color", "#C70039")
    iconI[i].style.setProperty("--text-shadow", 'none')
  }

  for(i=0; i< iconA.length;i++){
    iconA[i].style.setProperty("--color", "#C70039")
    iconA[i].style.setProperty("--text-shadow", 'none')
  }
  //--------------//

  //--------------//

  // EXTRAS //
  correo.style.setProperty("--color", '#F5EFFF')
  correo.style.setProperty("--text-shadow", 'none')

  patreon.style.setProperty("--color", '#F5EFFF')
  patreon.style.setProperty("--text-shadow", 'none')
  
  for(i=0; i< cajaBotonesButton.length;i++){
    cajaBotonesButton[i].style.setProperty("--box-shadow", '10px 10px 10px rgba(20, 30, 70, 0.5)')
  }

  botonPaleta[0].style.setProperty("--bg-color", "#FFF5E0")
  botonPaleta[1].style.setProperty("--bg-color", "#FFF5E0")
  botonPaleta[0].style.setProperty("--border-color", "transparent")
  botonPaleta[1].style.setProperty("--border-color", "transparent")

  botonPaletaI[0].style.setProperty("--color", "#C70039")
  botonPaletaI[1].style.setProperty("--color", "#C70039")
  //--------------//

  }

  if (paleta == 2){

  // COLORES //
  /*
  #030637  rgb(3, 6, 55)
  #3C0753  rgb(60, 7, 83)
  #720455  rgb(114, 4, 85)
  #910A67  rgb(145, 10, 103)
  #F5EFFF rgb(245, 239, 255)
  */
  //--------------//


    // SWEET ALERT //
    titleColor = "#F5EFFF"
    confirmButton= "#030637"
    cancelButton= "#720455"
    color_icon = "#910A67"
    color_background = 'linear-gradient(to bottom, #3C0753 15%, #910A67 115%)'
    for(i=0; i< pSpan.length;i++){
      pSpan[i].style.setProperty("--color", "#030637")
    }
    //--------------//

    // FONDO //
      general.style.setProperty("--bg-image", 'linear-gradient(to bottom, #3C0753, #910A67)')
    //--------------//
  
    // TITULO //
    titulo.style.setProperty("--color", '#F5EFFF')
    titulo.style.setProperty("--text-shadow", '5px 5px 5px rgba(3, 6, 55, 0.5)')
  
    for(i=0; i< tituloSpan.length;i++){
      tituloSpan[i].style.setProperty("--color", "#910A67")
    }
  
    //--------------//
  
    // CAJAS //
    for(i=0; i< cajaDia.length;i++){
      cajaDia[i].style.setProperty("--bg-color", '#3C0753')
      cajaDia[i].style.setProperty("--border-color", 'transparent')
      cajaDia[i].style.setProperty("--box-shadow", '10px 10px 10px rgba(3, 6, 55, 0.5)')
    }
  
    // H3 //
    for(i=0; i< h3.length;i++){
      h3[i].style.setProperty("--color", "#910A67")
      h3[i].style.setProperty("--text-shadow", '2px 2px 2px rgba(3, 6, 55, 0.5)')
    }
    //--------------//
  
    // HR //
    for(i=0; i< hr.length;i++){
      hr[i].style.setProperty("--border-top-color", "#F5EFFF")
      hr[i].style.setProperty("--border-bottom-color", "#F5EFFF")
    }
    //--------------//
  
    // H4 //
    for(i=0; i< h4.length;i++){
      h4[i].style.setProperty("--color", "#F5EFFF")
      h4[i].style.setProperty("--text-shadow", '2px 2px 2px rgba(3, 6, 55, 0.5)')
    }
  
    for(i=0; i< spanH4.length;i++){
      spanH4[i].style.setProperty("--color", "#910A67")
    }
    //--------------//
  
    // SPAN //
  
    //--------------//
  
    // BOTONES //
  
    for (let i = 0; i < buttonDias.length; i++) {
      buttonDias[i].style.setProperty("--bg-color", 'transparent')
      buttonDias[i].style.setProperty("--border-color", '#910A67')
  
      function handleMouseDown() {
        buttonDias[i].style.setProperty("--border-color", '#F5EFFF');
      }
  
      function handleMouseUp() {
        buttonDias[i].style.setProperty("--border-color", '#910A67');
      }
  
      function hover_on() {
        buttonDiasH4[i].style.setProperty('--color',"#910A67")
      }
  
      function hover_off(){
        buttonDiasH4[i].style.setProperty('--color','#F5EFFF');
      }
  
      buttonDias[i].addEventListener("mousedown", handleMouseDown);
      buttonDias[i].addEventListener("mouseup", handleMouseUp);
      buttonDiasH4[i].addEventListener("mouseover", hover_on);
      buttonDiasH4[i].addEventListener("mouseout", hover_off);
    }
  
    //--------------//
  
    // ICONS // 
    for(i=0; i< iconI.length;i++){
      iconI[i].style.setProperty("--color", "#F5EFFF")
      iconI[i].style.setProperty("--text-shadow", 'none')
    }
  
    for(i=0; i< iconA.length;i++){
      iconA[i].style.setProperty("--color", "#F5EFFF")
      iconA[i].style.setProperty("--text-shadow", 'none')
    }
    //--------------//
  
    //--------------//
  
    // EXTRAS //
    correo.style.setProperty("--color", '#E2F1E7')
    correo.style.setProperty("--text-shadow", 'none')
  
    patreon.style.setProperty("--color", '#E2F1E7')
    patreon.style.setProperty("--text-shadow", 'none')
    
    for(i=0; i< cajaBotonesButton.length;i++){
      cajaBotonesButton[i].style.setProperty("--box-shadow", '10px 10px 10px rgba(3, 6, 55, 0.5)')
    }
  
    botonPaleta[0].style.setProperty("--bg-color", "#3C0753")
    botonPaleta[1].style.setProperty("--bg-color", "#3C0753")
    botonPaleta[0].style.setProperty("--border-color", "transparent")
    botonPaleta[1].style.setProperty("--border-color", "transparent")
  
    botonPaletaI[0].style.setProperty("--color", "#F5EFFF")
    botonPaletaI[1].style.setProperty("--color", "#F5EFFF")
    //--------------//
  
  }
/*
  if (paleta == 3){

    // SWEET ALERT //
    titleColor = "#F0F3FF"
    confirmButton= "#211951"
    cancelButton= "#836FFF"
    color_icon = "#15F5BA"
    color_background = 'linear-gradient(to right, #211951 10%, #15F5BA 110%)'
    for(i=0; i< pSpan.length;i++){
      pSpan[i].style.setProperty("--color", "#15F5BA")
    }
    //--------------//

    // FONDO //
      general.style.setProperty("--bg-image", 'radial-gradient(circle, #15F5BA, #211951)')
    //--------------//
  
    // TITULO //
    titulo.style.setProperty("--color", '#F0F3FF')
    titulo.style.setProperty("--text-shadow", '5px 5px 5px rgba(33, 25, 81, 0.5)')
  
    for(i=0; i< tituloSpan.length;i++){
      tituloSpan[i].style.setProperty("--color", "#15F5BA")
    }
  
    //--------------//
  
    // CAJAS //
    for(i=0; i< cajaDia.length;i++){
      cajaDia[i].style.setProperty("--bg-color", '#211951')
      cajaDia[i].style.setProperty("--border-color", 'transparent')
      cajaDia[i].style.setProperty("--box-shadow", '10px 10px 10px rgba(0, 0, 0, 0.5)')
    }
  
    // H3 //
    for(i=0; i< h3.length;i++){
      h3[i].style.setProperty("--color", "#15F5BA")
      h3[i].style.setProperty("--text-shadow", '2px 2px 2px rgba(131, 111, 255, 0.5)')
    }
    //--------------//
  
    // HR //
    for(i=0; i< hr.length;i++){
      hr[i].style.setProperty("--border-top-color", "#15F5BA")
      hr[i].style.setProperty("--border-bottom-color", "#15F5BA")
    }
    //--------------//
  
    // H4 //
    for(i=0; i< h4.length;i++){
      h4[i].style.setProperty("--color", "#F0F3FF")
      h4[i].style.setProperty("--text-shadow", '2px 2px 2px rgba(131, 111, 255, 0.5)')
    }
  
    for(i=0; i< spanH4.length;i++){
      spanH4[i].style.setProperty("--color", "#15F5BA")
    }
    //--------------//
  
    // SPAN //
  
    //--------------//
  
    // BOTONES //
    for (let i = 0; i < buttonDias.length; i++) {
      buttonDias[i].style.setProperty("--bg-color", 'transparent')
      buttonDias[i].style.setProperty("--border-color", '#15F5BA')
  
      function handleMouseDown() {
        buttonDias[i].style.setProperty("--border-color", '#F0F3FF');
      }
  
      function handleMouseUp() {
        buttonDias[i].style.setProperty("--border-color", '#15F5BA');
      }
  
      function hover_on() {
        buttonDiasH4[i].style.setProperty('--color',"#15F5BA")
      }
  
      function hover_off(){
        buttonDiasH4[i].style.setProperty('--color','#F0F3FF');
      }
  
      buttonDias[i].addEventListener("mousedown", handleMouseDown);
      buttonDias[i].addEventListener("mouseup", handleMouseUp);
      buttonDiasH4[i].addEventListener("mouseover", hover_on);
      buttonDiasH4[i].addEventListener("mouseout", hover_off);
    }
  
    //--------------//
  
    // ICONS // 
    for(i=0; i< iconI.length;i++){
      iconI[i].style.setProperty("--color", "#F0F3FF")
      iconI[i].style.setProperty("--text-shadow", 'none')
    }
  
    for(i=0; i< iconA.length;i++){
      iconA[i].style.setProperty("--color", "#F0F3FF")
      iconA[i].style.setProperty("--text-shadow", 'none')
    }
    //--------------//
  
    //--------------//
  
    // EXTRAS //
    correo.style.setProperty("--color", '#15F5BA')
    correo.style.setProperty("--text-shadow", 'none')
  
    patreon.style.setProperty("--color", '#15F5BA')
    patreon.style.setProperty("--text-shadow", 'none')
    
    for(i=0; i< cajaBotonesButton.length;i++){
      cajaBotonesButton[i].style.setProperty("--box-shadow", '10px 10px 10px rgba(0, 0, 0, 0.5)')
    }
  
    botonPaleta[0].style.setProperty("--bg-color", "#211951")
    botonPaleta[1].style.setProperty("--bg-color", "#211951")
    botonPaleta[0].style.setProperty("--border-color", "transparent")
    botonPaleta[1].style.setProperty("--border-color", "transparent")
  
    botonPaletaI[0].style.setProperty("--color", "#F0F3FF")
    botonPaletaI[1].style.setProperty("--color", "#F0F3FF")
    //--------------//
  
  }

  if (paleta == 4){

    // SWEET ALERT //
    titleColor = "#EEEEEE"
    confirmButton= "#151515"
    cancelButton= "#C73659"
    color_icon = "#C73659"
    color_background = 'linear-gradient(to right, #151515 10%, #C73659 110%)'
    for(i=0; i< pSpan.length;i++){
      pSpan[i].style.setProperty("--color", "#C73659")
    }
    //--------------//

    // FONDO //
      general.style.setProperty("--bg-image", 'radial-gradient(circle, #C73659, #151515)')
    //--------------//
  
    // TITULO //
    titulo.style.setProperty("--color", '#EEEEEE')
    titulo.style.setProperty("--text-shadow", '5px 5px 5px rgba(169, 29, 58, 0.5)')
  
    for(i=0; i< tituloSpan.length;i++){
      tituloSpan[i].style.setProperty("--color", "#C73659")
    }
  
    //--------------//
  
    // CAJAS //
    for(i=0; i< cajaDia.length;i++){
      cajaDia[i].style.setProperty("--bg-color", '#151515')
      cajaDia[i].style.setProperty("--border-color", 'transparent')
      cajaDia[i].style.setProperty("--box-shadow", '10px 10px 10px rgba(0, 0, 0, 0.5)')
    }
  
    // H3 //
    for(i=0; i< h3.length;i++){
      h3[i].style.setProperty("--color", "#C73659")
      h3[i].style.setProperty("--text-shadow", '2px 2px 2px rgba(169, 29, 58, 0.5)')
    }
    //--------------//
  
    // HR //
    for(i=0; i< hr.length;i++){
      hr[i].style.setProperty("--border-top-color", "#C73659")
      hr[i].style.setProperty("--border-bottom-color", "#C73659")
    }
    //--------------//
  
    // H4 //
    for(i=0; i< h4.length;i++){
      h4[i].style.setProperty("--color", "#EEEEEE")
      h4[i].style.setProperty("--text-shadow", '2px 2px 2px rgba(169, 29, 58, 0.5)')
    }
  
    for(i=0; i< spanH4.length;i++){
      spanH4[i].style.setProperty("--color", "#C73659")
    }
    //--------------//
  
    // SPAN //
  
    //--------------//
  
    // BOTONES //
    for (let i = 0; i < buttonDias.length; i++) {
      buttonDias[i].style.setProperty("--bg-color", 'transparent')
      buttonDias[i].style.setProperty("--border-color", '#C73659')
  
      function handleMouseDown() {
        buttonDias[i].style.setProperty("--border-color", '#EEEEEE');
      }
  
      function handleMouseUp() {
        buttonDias[i].style.setProperty("--border-color", '#C73659');
      }
  
      function hover_on() {
        buttonDiasH4[i].style.setProperty('--color',"#C73659")
      }
  
      function hover_off(){
        buttonDiasH4[i].style.setProperty('--color','#EEEEEE');
      }
  
      buttonDias[i].addEventListener("mousedown", handleMouseDown);
      buttonDias[i].addEventListener("mouseup", handleMouseUp);
      buttonDiasH4[i].addEventListener("mouseover", hover_on);
      buttonDiasH4[i].addEventListener("mouseout", hover_off);
    }
  
    //--------------//
  
    // ICONS // 
    for(i=0; i< iconI.length;i++){
      iconI[i].style.setProperty("--color", "#EEEEEE")
      iconI[i].style.setProperty("--text-shadow", 'none')
    }
  
    for(i=0; i< iconA.length;i++){
      iconA[i].style.setProperty("--color", "#EEEEEE")
      iconA[i].style.setProperty("--text-shadow", 'none')
    }
    //--------------//
  
    //--------------//
  
    // EXTRAS //
    correo.style.setProperty("--color", '#EEEEEE')
    correo.style.setProperty("--text-shadow", 'none')
  
    patreon.style.setProperty("--color", '#EEEEEE')
    patreon.style.setProperty("--text-shadow", 'none')
    
    for(i=0; i< cajaBotonesButton.length;i++){
      cajaBotonesButton[i].style.setProperty("--box-shadow", '10px 10px 10px rgba(0, 0, 0, 0.5)')
    }
  
    botonPaleta[0].style.setProperty("--bg-color", "#151515")
    botonPaleta[1].style.setProperty("--bg-color", "#151515")
    botonPaleta[0].style.setProperty("--border-color", "transparent")
    botonPaleta[1].style.setProperty("--border-color", "transparent")
  
    botonPaletaI[0].style.setProperty("--color", "#EEEEEE")
    botonPaletaI[1].style.setProperty("--color", "#EEEEEE")
    //--------------//
  
  }
*/
}
