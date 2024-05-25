function mostrarSabor() {
    
    var selectElement = document.querySelector('.nieve');
    
    var selectedValue = selectElement.value;
    
    var resultadoDiv = document.querySelector('.resultado');
    
    
    resultadoDiv.textContent = "Ha seleccionado el sabor de helado: " + selectedValue;
  }