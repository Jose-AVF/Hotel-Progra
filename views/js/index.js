$(document).ready(function () {
  // Mostrar u ocultar el botón según el scroll
    $(window).on('scroll', function () {
    if ($(this).scrollTop() > 200) {
        $('#btn-subir').fadeIn();
    } else {
        $('#btn-subir').fadeOut();
    }
    });

  // Al hacer clic, subir suavemente hasta el header
    $('#btn-subir').on('click', function () {
    $('html, body').animate({
        scrollTop: $('header').offset().top
    }, 200); // 200 ms de duración
    });
});