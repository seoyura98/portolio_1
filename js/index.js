$(function () {
    //header
    Splitting();

    $(".bar").on("click", function () {
        $("#modalBox").addClass("on");
    });
    $("#close").on("click", function () {
        $("#modalBox").removeClass("on");
    });


    //visual
    $("#visual .wrap").addClass("on");


    //con01

    const content = "예전부터 손으로 사부작사부작 무언가를 만들어 주변사람들에게 선물하는 것을 좋아했습니다. \n\n 저로인해 누군가가 행복함을 느낀다라는 것이 저 자신에게도 행복함과 뿌듯함으로 다가왔습니다. \n\n 웹디자인 또한 화면 속에서 디자인을 직접만들고 사람들에게 만족감을 줄 수 있다라는 점이 비슷하다고 느껴져 자연스럽게 웹디자인에 관심을 갖게 되었습니다. ";
    const text = document.querySelector(".text_box span");
    let i = 0;

    function typing() {
        let txt = content[i++];
        text.innerHTML += txt === "\n" ? "<br/>" : txt;
        if (i >= content.length) {
            clearInterval(stop)
        }
    }
    stop = setInterval(typing, 100)

    //con02

    gsap.timeline({
        scrollTrigger: {
            trigger: "#con02",
            start: "0% 5%",
            end: "0% 0%",
            scrub: 2,
            markers: true,
        }
    })
        .fromTo(
            "#con02 .inner", { "clip-path": "inset(60% 60% 60% 60% round 20%)" }, { "clip-path": "inset(0% 0% 0% 0% round 0%)", ease: "none", duration: 10 }
        )


    //scroll
    let visual = $("#visual").offset().top;
    let con01 = $("#con01").offset().top;
    // let con02 = $("#con02").offset().top;
    // let con03 = $("#con03").offset().top;
    // let con04 = $("#con04").offset().top;
    // let con05 = $("#con05").offset().top;


    console.log(visual, con01);

    $(window).on("scroll", function () {
        let sc = $(this).scrollTop();
        console.log(sc);

        if (sc >= 50) {
            $("header").addClass("in");
        } else {
            $("header").removeClass("in");
        }

        if (sc >= visual && sc < con01) {
            $("#con01 .inner .left").addClass("on");
            $("#con01 .inner .right").addClass("on");
        }
    });

})