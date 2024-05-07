// Este código asegura que el script se ejecute después de que el documento HTML esté completamente cargado
$(document).ready(function () {
    // Seleccionamos todos los enlaces que empiezan con '#' y añadimos un evento de clic a cada uno
    $('a[href^="#"]').on("click", function (e) {
      e.preventDefault(); // Prevenimos el comportamiento por defecto del enlace (navegar a otra página)
  
      // Obtenemos el ID del elemento al que queremos hacer scroll suave
      const targetId = $(this).attr("href").slice(1);
  
      // Buscamos el elemento en el DOM utilizando su ID
      const targetElement = $("#" + targetId);
  
      // Verificamos si el elemento existe en la página
      if (targetElement.length) {
        // Si existe, animamos el scroll del documento HTML y el body
        $("html, body").animate(
          {
            scrollTop: targetElement.offset().top, // Hacemos scroll hasta la posición superior del elemento
          },
          500
        ); // Duración de la animación en milisegundos
      }
    });
    //inicio en jquery para toolstip para no perderme
    $('[data-bs-toggle="tooltip"]').tooltip();
  });
  