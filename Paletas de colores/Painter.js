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

  // SWEET ALERT //
  titleColor = "#2c9c7b"
  confirmButton= "#2c9c7b"
  cancelButton= "#3C3C3C"
  color_icon = "#3C3C3C"
  color_background = 'linear-gradient(to bottom, #00ff77, #e3e3e3)'
  for(i=0; i< pSpan.length;i++){
    pSpan[i].style.setProperty("--color", "#3C3C3C")
  }
  //--------------//

  // FONDO //
    general.style.setProperty("--bg-image", 'radial-gradient(circle, #e3e3e3, #00ff77)')
  //--------------//

  // TITULO //
  titulo.style.setProperty("--color", '#ffffff')
  titulo.style.setProperty("--text-shadow", '5px 5px 5px rgba(175, 175, 175, 0.5)')

  for(i=0; i< tituloSpan.length;i++){
    tituloSpan[i].style.setProperty("--color", "#2c9c7b")
  }
  //--------------//

  // CAJAS //
  for(i=0; i< cajaDia.length;i++){
    cajaDia[i].style.setProperty("--bg-color", '#ffffff')
    cajaDia[i].style.setProperty("--border-color", 'transparent')
    cajaDia[i].style.setProperty("--box-shadow", '10px 10px 10px rgba(0, 0, 0, 0.5)')
  }

  // H3 //
  for(i=0; i< h3.length;i++){
    h3[i].style.setProperty("--color", "#2c9c7b")
    h3[i].style.setProperty("--text-shadow", '2px 2px 2px rgba(44, 156, 123, 0.5)')
  }
  //--------------//

  // HR //
  for(i=0; i< hr.length;i++){
    hr[i].style.setProperty("--border-top-color", "#2c9c7b")
    hr[i].style.setProperty("--border-bottom-color", "#2c9c7b")
  }
  //--------------//

  // H4 //
  for(i=0; i< h4.length;i++){
    h4[i].style.setProperty("--color", "#3c3c3c")
    h4[i].style.setProperty("--text-shadow", '2px 2px 2px rgba(44, 156, 123, 0.5)')
  }

  for(i=0; i< spanH4.length;i++){
    spanH4[i].style.setProperty("--color", "#2c9c7b")
  }
  //--------------//

  // SPAN //

  //--------------//

  // BOTONES //
  for (let i = 0; i < buttonDias.length; i++) {
    buttonDias[i].style.setProperty("--bg-color", 'transparent')
    buttonDias[i].style.setProperty("--border-color", '#2c9c7b')

    function handleMouseDown() {
      buttonDias[i].style.setProperty("--border-color", '#3c3c3c');
    }

    function handleMouseUp() {
      buttonDias[i].style.setProperty("--border-color", '#2c9c7b');
    }

    function hover_on() {
      buttonDiasH4[i].style.setProperty('--color',"#2c9c7b")
    }

    function hover_off(){
      buttonDiasH4[i].style.setProperty('--color','#3c3c3c');
    }

    buttonDias[i].addEventListener("mousedown", handleMouseDown);
    buttonDias[i].addEventListener("mouseup", handleMouseUp);
    buttonDiasH4[i].addEventListener("mouseover", hover_on);
    buttonDiasH4[i].addEventListener("mouseout", hover_off);
  }

  //--------------//

  // ICONS // 
  for(i=0; i< iconI.length;i++){
    iconI[i].style.setProperty("--color", "#2c9c7b")
    iconI[i].style.setProperty("--text-shadow", 'none')
  }

  for(i=0; i< iconA.length;i++){
    iconA[i].style.setProperty("--color", "#2c9c7b")
    iconA[i].style.setProperty("--text-shadow", 'none')
  }
  //--------------//

  //--------------//

  // EXTRAS //
  correo.style.setProperty("--color", '#3c3c3c')
  correo.style.setProperty("--text-shadow", 'none')

  patreon.style.setProperty("--color", '#3c3c3c')
  patreon.style.setProperty("--text-shadow", 'none')
  
  for(i=0; i< cajaBotonesButton.length;i++){
    cajaBotonesButton[i].style.setProperty("--box-shadow", '10px 10px 10px rgba(0, 0, 0, 0.5)')
  }

  botonPaleta[0].style.setProperty("--bg-color", "#ffffff")
  botonPaleta[1].style.setProperty("--bg-color", "#ffffff")
  botonPaleta[0].style.setProperty("--border-color", "transparent")
  botonPaleta[1].style.setProperty("--border-color", "transparent")

  botonPaletaI[0].style.setProperty("--color", "#2c9c7b")
  botonPaletaI[1].style.setProperty("--color", "#2c9c7b")
  //--------------//

  }

  if (paleta == 2){

    // SWEET ALERT //
    titleColor = "#EBD3F8"
    confirmButton= "#2E073F"
    cancelButton= "#7A1CAC"
    color_icon = "#EBD3F8"
    color_background = 'linear-gradient(to right, #2E073F 15%, #AD49E1 115%)'
    for(i=0; i< pSpan.length;i++){
      pSpan[i].style.setProperty("--color", "#AD49E1")
    }
    //--------------//

    // FONDO //
      general.style.setProperty("--bg-image", 'radial-gradient(circle, #AD49E1, #2E073F)')
    //--------------//
  
    // TITULO //
    titulo.style.setProperty("--color", '#EBD3F8')
    titulo.style.setProperty("--text-shadow", '5px 5px 5px rgba(122, 28, 172, 0.5)')
  
    for(i=0; i< tituloSpan.length;i++){
      tituloSpan[i].style.setProperty("--color", "#AD49E1")
    }
  
    //--------------//
  
    // CAJAS //
    for(i=0; i< cajaDia.length;i++){
      cajaDia[i].style.setProperty("--bg-color", '#2E073F')
      cajaDia[i].style.setProperty("--border-color", 'transparent')
      cajaDia[i].style.setProperty("--box-shadow", '10px 10px 10px rgba(0, 0, 0, 0.5)')
    }
  
    // H3 //
    for(i=0; i< h3.length;i++){
      h3[i].style.setProperty("--color", "#AD49E1")
      h3[i].style.setProperty("--text-shadow", '2px 2px 2px rgba(122, 28, 172, 0.5)')
    }
    //--------------//
  
    // HR //
    for(i=0; i< hr.length;i++){
      hr[i].style.setProperty("--border-top-color", "#AD49E1")
      hr[i].style.setProperty("--border-bottom-color", "#AD49E1")
    }
    //--------------//
  
    // H4 //
    for(i=0; i< h4.length;i++){
      h4[i].style.setProperty("--color", "#EBD3F8")
      h4[i].style.setProperty("--text-shadow", '2px 2px 2px rgba(122, 28, 172, 0.5)')
    }
  
    for(i=0; i< spanH4.length;i++){
      spanH4[i].style.setProperty("--color", "#AD49E1")
    }
    //--------------//
  
    // SPAN //
  
    //--------------//
  
    // BOTONES //
  
    for (let i = 0; i < buttonDias.length; i++) {
      buttonDias[i].style.setProperty("--bg-color", 'transparent')
      buttonDias[i].style.setProperty("--border-color", '#AD49E1')
  
      function handleMouseDown() {
        buttonDias[i].style.setProperty("--border-color", '#EBD3F8');
      }
  
      function handleMouseUp() {
        buttonDias[i].style.setProperty("--border-color", '#AD49E1');
      }
  
      function hover_on() {
        buttonDiasH4[i].style.setProperty('--color',"#AD49E1")
      }
  
      function hover_off(){
        buttonDiasH4[i].style.setProperty('--color','#EBD3F8');
      }
  
      buttonDias[i].addEventListener("mousedown", handleMouseDown);
      buttonDias[i].addEventListener("mouseup", handleMouseUp);
      buttonDiasH4[i].addEventListener("mouseover", hover_on);
      buttonDiasH4[i].addEventListener("mouseout", hover_off);
    }
  
    //--------------//
  
    // ICONS // 
    for(i=0; i< iconI.length;i++){
      iconI[i].style.setProperty("--color", "#EBD3F8")
      iconI[i].style.setProperty("--text-shadow", 'none')
    }
  
    for(i=0; i< iconA.length;i++){
      iconA[i].style.setProperty("--color", "#EBD3F8")
      iconA[i].style.setProperty("--text-shadow", 'none')
    }
    //--------------//
  
    //--------------//
  
    // EXTRAS //
    correo.style.setProperty("--color", '#EBD3F8')
    correo.style.setProperty("--text-shadow", 'none')
  
    patreon.style.setProperty("--color", '#EBD3F8')
    patreon.style.setProperty("--text-shadow", 'none')
    
    for(i=0; i< cajaBotonesButton.length;i++){
      cajaBotonesButton[i].style.setProperty("--box-shadow", '10px 10px 10px rgba(0, 0, 0, 0.5)')
    }
  
    botonPaleta[0].style.setProperty("--bg-color", "#2E073F")
    botonPaleta[1].style.setProperty("--bg-color", "#2E073F")
    botonPaleta[0].style.setProperty("--border-color", "transparent")
    botonPaleta[1].style.setProperty("--border-color", "transparent")
  
    botonPaletaI[0].style.setProperty("--color", "#EBD3F8")
    botonPaletaI[1].style.setProperty("--color", "#EBD3F8")
    //--------------//
  
  }

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

}
/* */