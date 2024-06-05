// Supongamos que tienes dos etiquetas, una con la clase 'trigger' y otra con la clase 'target'
// Quieres cambiar la propiedad 'color' de la etiqueta 'target' cuando el mouse está sobre 'trigger'

// Primero, obtén la referencia de ambas etiquetas
var trigger = document.querySelector(".trigger");
var target = document.querySelector(".target");

// Luego, agrega un evento 'mouseover' a la etiqueta 'trigger'
trigger.addEventListener('mouseover', function() {
  // Cambia la propiedad 'color' de la etiqueta 'target'
  target.style.color = 'rgb(193, 228, 228)';
});

// No olvides agregar un evento 'mouseout' para revertir el cambio cuando el mouse ya no esté sobre 'trigger'
trigger.addEventListener('mouseout', function() {
  // Revierte la propiedad 'color' de la etiqueta 'target'
  target.style.color = 'initial';
});
