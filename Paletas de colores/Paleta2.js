


function constructor_colores2(){

//PALETA DE COLORES----------------------------------------------------------------------------------------------------------

    let backimg= 'linear-gradient(to bottom, #0099F0, #F000E8)';
    let title = "#F8F8F8";
    let diasBack = '#F8F8F8'
    let diasBord = '#F8F8F8'
    let h3Color = '#F000E8'
    let h4Color = "#484949"
    let h3HoverColor="#0099F0"
    let hRColor = "#0099F0"
    let iColor = "#0099F0"
    let spanColor = "#0099F0"
    let titleSpanColor = "#F000E8";
    let buttonBord ='#0099F0'
    let buttonBordHover = "#484949"
    let paleta9Color = "#1C1C1C"

    //PALETA: SWEET ALERT//
    titleColor = "#F8F8F8"
    confirmButton= "#FFB114"
    cancelButton= "#0099F0"
    color_icon = "#F8F8F8"
    color_span = "#FFB114"
    color_background = 'linear-gradient(to bottom, #0099F0, #F000E8)'

    //--------------//

    //PALETA: GENERAL//
  
    let paleta_general = document.querySelector(".General");
    paleta_general.style.backgroundImage = backimg;
  
    //--------------//
  
    //PALETA: TITULO//
  
    let paleta_titulo = document.querySelector("#titulo")
    paleta_titulo.style.color = title;
  
    //--------------//
    
    //PALETA: DÍAS//
  
    let paleta_dia = document.querySelectorAll(".caja_dias .dia")
    for(i=0; i< paleta_dia.length;i++){
    paleta_dia[i].style.backgroundColor = diasBack;
    paleta_dia[i].style.borderColor = diasBord;

    }
    //--------------//
  
    //PALETA: H3//
  
    let paleta_h3 = document.querySelectorAll("h3")
    for(i=0;i<paleta_h3.length;i++){
      paleta_h3[i].style.color = h3Color;
    }
    //--------------//
  
    //PALETA: HR//
  
    let paleta_hr = document.querySelectorAll("hr")
  
    for(i=0;i<paleta_hr.length;i++){
      paleta_hr[i].style.borderTopColor = hRColor;
      paleta_hr[i].style.borderBottomColor = hRColor;
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
      paleta_span[i].style.color = spanColor;
    }

    let paleta_span_swal2 = document.querySelectorAll(".span_desc")
    for(i=0;i<paleta_span_swal2.length;i++){
      paleta_span_swal2[i].style.color = color_span;
    }

    let paleta_span_title = document.querySelectorAll(".span_title_desc")
    for(i=0;i<paleta_span_title.length;i++){
      paleta_span_title[i].style.color = titleSpanColor;
    }

    //--------------//
  
    //PALETA: BOTONES; FONDO, BORDES, TEXTO, HOVER//
  
    let paleta_button = document.querySelectorAll(".caja_dias button");
    let paleta_button_h4 = document.querySelectorAll(".caja_dias button h4");
    for (let i = 0; i < paleta_button.length; i++) {
      paleta_button[i].style.backgroundColor = diasBack;
      paleta_button[i].style.borderColor = buttonBord;
      paleta_button_h4[i].style.color = h4Color;
  
      function handleMouseDown() {
        paleta_button[i].style.borderColor = buttonBordHover;
      }
  
      function handleMouseUp() {
        paleta_button[i].style.borderColor = buttonBord;
      }
  
      function hover_on() {
        paleta_button_h4[i].style.color = h3HoverColor;
      }
  
      function hover_off(){
        paleta_button_h4[i].style.color = h4Color;
      }
  
      paleta_button[i].addEventListener("mousedown", handleMouseDown);
      paleta_button[i].addEventListener("mouseup", handleMouseUp);
      paleta_button_h4[i].addEventListener("mouseover", hover_on);
      paleta_button_h4[i].addEventListener("mouseout", hover_off);
    }
  
    //--------------//
  
    //PALETA: I//
  
  let paleta_i = document.querySelectorAll(".caja_dias i");
  
  for(i=0;i<paleta_i.length;i++){
      paleta_i[i].style.color = iColor ;
      }
  
  //--------------//
  
  //PALETA: A//
  
  let paleta_a = document.querySelectorAll(".icon");
  
  for(i=0;i<paleta_a.length;i++){
      paleta_a[i].style.color = iColor ;
      }

  //--------------//

  //PALETA: CAJA DE PALETAS, BOTONES DE PALETAS//

  let paleta_menu_paletas = document.querySelector(".caja_botones")
  paleta_menu_paletas.style.backgroundColor = "transparent";
  paleta_menu_paletas.style.borderColor = "transparent";
  
  let paleta_button_paleta = document.querySelectorAll(".caja_botones button")
  for(i=0;i<paleta_button_paleta.length;i++){
    paleta_button_paleta[i].style.backgroundColor =diasBack;
    paleta_button_paleta[i].style.borderColor = "transparent";
  }

  paleta_i_paleta9 = document.querySelectorAll(".caja_botones i");
  for(i=0;i<paleta_button_paleta.length;i++){
    paleta_i_paleta9[i].style.color =  paleta9Color;
  }
  
  //--------------//

  }