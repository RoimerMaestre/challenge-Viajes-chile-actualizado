document.addEventListener('DOMContentLoaded', function () {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
});

  //codigo para activar ventana modal
  document.addEventListener('DOMContentLoaded', () => {
    const myModal = document.getElementById('myModal');
    const myInput = document.getElementById('myInput');
  
    if (myModal) {
      myModal.addEventListener('shown.bs.modal', () => {
        myInput.focus();
      });
    }
  });


  //codigo de jquery para ventana emergente en boton enviar
  $(document).ready(function(){
    // Agregar controlador de eventos al hacer clic en el botón
    $("#submitButton").click(function(){
      // Mostrar mensaje de alerta
      alert("¡Tu mensaje fue enviado exitosamente!");
    });
  });




  