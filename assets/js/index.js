 $(document).ready(function() {
        $('[data-toggle="tooltip"]').tooltip();

      });

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("miFormulario").addEventListener("submit", function(event) {
        event.preventDefault(); 
        
      
        setTimeout(function() {
            
            alert("¡Formulario enviado con éxito!");
            
            
            document.getElementById("miFormulario").reset();
        }, 1000);
    });
});
