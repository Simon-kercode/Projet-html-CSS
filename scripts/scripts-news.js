// hover belle ile
$("#news #newsGrandEcran #belleIle").hover(
    function() {
        // Lorsque la souris survole l'élément
        $(this).addClass("mouseOn");
        $("#news #newsGrandEcran #lipdub, #news #newsGrandEcran #contes").addClass("mouseOff");
    },
    function() {
        // Lorsque la souris quitte l'élément
        $(this).removeClass("mouseOn");
        $("#news #newsGrandEcran #lipdub, #news #newsGrandEcran #contes").removeClass("mouseOff");
    }
);
// hover lipdub
$("#news #newsGrandEcran #lipdub").hover(
    function() {
        $(this).addClass("mouseOn");
        $("#news #newsGrandEcran #belleIle, #news #newsGrandEcran #contes").addClass("mouseOff");
    },
    function() {
        $(this).removeClass("mouseOn");
        $("#news #newsGrandEcran #belleIle, #news #newsGrandEcran #contes").removeClass("mouseOff");
    }
);
// hover contes orientaux
$("#news #newsGrandEcran #contes").hover(
    function() {
        $(this).addClass("mouseOn");
        $("#news #newsGrandEcran #lipdub, #news #newsGrandEcran #belleIle").addClass("mouseOff");
    },
    function() {
        $(this).removeClass("mouseOn");
        $("#news #newsGrandEcran #lipdub, #news #newsGrandEcran #belleIle").removeClass("mouseOff");
    }
);

$(document).ready(function(){
    $("#tout").addClass("on");

    $("#cycleUn").click(function(){
        $(".tout").hide();
        $(".cycleUn").show();
        $("#tout, #cycleDeux, #cycleTrois").removeClass("on");
        $("#cycleUn").addClass("on");
    });
    $("#cycleDeux").click(function(){
        $(".tout").hide();
        $(".cycleDeux").show();
        $("#tout, #cycleUn, #cycleTrois").removeClass("on");
        $("#cycleDeux").addClass("on");
    });
    $("#cycleTrois").click(function(){
        $(".tout").hide();
        $(".cycleTrois").show();
        $("#tout, #cycleUn, #cycleDeux").removeClass("on");
        $("#cycleTrois").addClass("on");
    });
    $("#tout").click(function(){
        $(".tout").show();
        $("#cycleUn, #cycleDeux, #cycleTrois").removeClass("on");
        $("#tout").addClass("on");
    });
})