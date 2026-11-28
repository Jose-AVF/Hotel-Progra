$(document).ready(function () {
  // Mostrar y ocultar el botón dependiendo el scroll
    $(window).on('scroll', function () {
    if ($(this).scrollTop() > 200) {
        $('#btn-subir').fadeIn();
    } else {
        $('#btn-subir').fadeOut();
    }
    });

  // Al hacer clic, sube suavemente hasta el header
    $('#btn-subir').on('click', function () {
    $('html, body').animate({
        scrollTop: $('header').offset().top
    }, 200); // 200 ms de duración
    });
});