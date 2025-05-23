$(function () {
    //header
    Splitting();


    //visual
    $("#visual .wrap").addClass("on");


    //scroll
    let visual = $("#visual").offset().top;
    let con01 = $("#con01").offset().top;
    let con02 = $("#con02").offset().top;
    let con03 = $("#con03").offset().top;
    let con04 = $("#con04").offset().top;

    console.log(visual, con01, con02, con03, con04);

    $(window).on("scroll", function () {
        let sc = $(this).scrollTop();
        console.log(sc);

        if (sc >= 50) {
            $("header").addClass("in");
        } else {
            $("header").removeClass("in");
        }

        if (sc >= visual && sc < con1) {


        }

        if (sc >= con1 && sc < con2) {


        }
        if (sc >= con2 && sc < con3) {

        }

        if (sc >= con3 && sc < con4) {


        }

        if (sc >= con4) {

        }
    });

})