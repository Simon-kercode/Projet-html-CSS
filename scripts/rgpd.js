// script déverouillage du bouton send si case rgpd cochée
$(document).ready(function () {
    // Désactiver le bouton au chargement de la page
    $('#send').prop('disabled', true);
    // Lorsque la case RGPD est cochée/décochée
    $('#rgpd').change(function () {
    // Vérifier si la case RGPD est cochée
        if ($(this).prop('checked')) {
        // Activer le bouton et défini la couleur de fond
        $('#send').prop('disabled', false).css('background-color', '#4c7aed');
        } else {
        // Désactiver le bouton et défini la couleur de fond
        $('#send').prop('disabled', true).css ('background-color', '#808080');
        }
    });
});