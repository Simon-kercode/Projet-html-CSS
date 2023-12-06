// clic vie de l'école
$("#menuPrincipal #menu1 #vie").click(function() {
    // Vérifier si l'élément a la classe "on"
    if ($(this).hasClass("on")) {
        // Retirer la classe "on"
        $(this).removeClass("on");
        $("#menuPrincipal #menuVie").slideUp(500);
    } else {
        // Ajouter la classe "on" et afficher le menu
        $(this).addClass("on");
        $("#menuPrincipal #menuVie").slideToggle(500);
    }
});

// clic cycles
$("#menuPrincipal #menu1 #cycles").click(function() {
    if ($(this).hasClass("on")) {
        $(this).removeClass("on");
        $("#menuPrincipal #menuCycles").slideUp(500);
    } else {
        $(this).addClass("on");
        $("#menuPrincipal #menuCycles").slideToggle(500);
    }
});

// clic Associations
$("#menuPrincipal #menu1 #assoc").click(function() {
    if ($(this).hasClass("on")) {
        $(this).removeClass("on");
        $("#menuPrincipal #menuAssoc").slideUp(500);
    } else {
        $(this).addClass("on");
        $("#menuPrincipal #menuAssoc").slideToggle(500);
    }
});

// Gérer le clic en dehors du menu pour retirer la classe "on"
$(document).click(function(event) {
    // Vérifier si l'élément cliqué est en dehors des menus
    if (!$(event.target).closest("#menuPrincipal").length) {
        // Vérifier la largeur de l'écran
        if (($(window).width()) < 768) {
        // Retirer la classe "on" de tous les éléments
        $("#menuPrincipal #menu1 .on").removeClass("on");
        // Masquer tous les menus
        $("#menuPrincipal #menu1, #menuPrincipal #menuVie, #menuPrincipal #menuCycles, #menuPrincipal #menuAssoc").slideUp(500);
    }
        else {
        $("#menuPrincipal #menu1 .on").removeClass("on");
        // Masquer tous les menus
        $("#menuPrincipal #menuVie, #menuPrincipal #menuCycles, #menuPrincipal #menuAssoc").slideUp(500);
    }}}
    
);
