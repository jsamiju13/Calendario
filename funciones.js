var launcher = document.querySelector("#launcher");
var take = document.querySelector(".evaluacion_viernes");

var give = document.querySelector(".evaluacion_info");
var give_elements = give.innerHTML;

launcher.addEventListener("mouseover",function(){
  give.innerHTML = take.innerHTML
});

launcher.addEventListener("mouseout",function(){
  give.innerHTML = give_elements
});