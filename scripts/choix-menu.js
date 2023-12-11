// clic vie de l'école
$("#menuPrincipal #vie").click(function() {
    // Vérifie si l'élément a la classe "navOn"
    if ($(this).hasClass("navOn")) {
        // Retire la classe "navOn" et ferme ce menu
        $(this).removeClass("navOn");
        $("#menuPrincipal #menuVie").slideUp(500);
    } else {
        // retire la classe "navOn" des autres menus et les ferme
        $('#menuPrincipal #cycles, #menuPrincipal #assoc').removeClass("navOn");
        $('#menuPrincipal #menuCycles, #menuPrincipal #menuAssoc').slideUp(500);
        // Ajoute la classe "navOn" et affiche ce menu
        $(this).addClass("navOn");
        $("#menuPrincipal #menuVie").slideToggle(500);
    }
});

// clic cycles
$("#menuPrincipal #cycles").click(function() {
    if ($(this).hasClass("navOn")) {
        $(this).removeClass("navOn");
        $("#menuPrincipal #menuCycles").slideUp(500);
    } else {
        $('#menuPrincipal #vie, #menuPrincipal #assoc').removeClass("navOn");
        $('#menuPrincipal #menuVie, #menuPrincipal #menuAssoc').slideUp(500);
        $(this).addClass("navOn");
        $("#menuPrincipal #menuCycles").slideToggle(500);
    }
});

// clic Associations
$("#menuPrincipal #assoc").click(function() {
    if ($(this).hasClass("navOn")) {
        $(this).removeClass("navOn");
        $("#menuPrincipal #menuAssoc").slideUp(500);
    } else {
        $('#menuPrincipal #vie, #menuPrincipal #cycles').removeClass("navOn");
        $('#menuPrincipal #menuCycles, #menuPrincipal #menuVie').slideUp(500);
        $(this).addClass("navOn");
        $("#menuPrincipal #menuAssoc").slideToggle(500);
    }
});

// Gère le clic en dehors du menu pour retirer la classe "navOn"
$(document).click(function(event) {
    // Vérifie si l'élément cliqué est en dehors des menus
    // closest vérifie si l'élément cliqué ou l'un de ses ancêtres a l'ID #menuPrincipal
    if (!$(event.target).closest("#menuPrincipal").length) {
        if (($(window).width()) < 768) {
        // Retire la classe "navOn" de tous les éléments et masque tous les menus
        $("#menuPrincipal #menuMobile .navOn").removeClass("navOn");
        $("#menuPrincipal #menuMobile, #menuPrincipal #menuVie, #menuPrincipal #menuCycles, #menuPrincipal #menuAssoc").slideUp(500);
    }
        else {
        $("#menuPrincipal #menuDesktop .navOn").removeClass("navOn");
        $("#menuPrincipal #menuVie, #menuPrincipal #menuCycles, #menuPrincipal #menuAssoc").slideUp(500);
    }}}
    
);
