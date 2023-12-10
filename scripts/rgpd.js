// script déverouillage du bouton send si case rgpd cochée
$(document).ready(function () {
    // Désactive le bouton au chargement de la page
    $('#send').prop('disabled', true);
    // Lorsque la case RGPD est cochée/décochée : ative ou désactive le bouton et change la couleur de fond
    $('#rgpd').change(function () {
        if ($(this).prop('checked')) {
        $('#send').prop('disabled', false).css('background-color', '#4c7aed');
        } else {
        $('#send').prop('disabled', true).css ('background-color', '#808080');
        }
    });
});