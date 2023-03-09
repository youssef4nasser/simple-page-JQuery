
$(document).ready(function() {

let innerWidthSideBar = $(".sidebar").innerWidth();

$(".sidebar").css("left", -innerWidthSideBar)


$("#closeMenue").click(function(){
    $(".sidebar").animate({left: -innerWidthSideBar},1000);
})

$("#openMenue").click(function(){
    if ($(".sidebar").css("left") ==  -innerWidthSideBar + "px") {

        $(".sidebar").animate({left: 0},1000)

    }else{

        $(".sidebar").animate({left: -innerWidthSideBar},1000)
    }
})


$(".sidebar ul a[href^='#']").click(function(){
    let valueOfHref = $(this).attr("href");
    console.log(valueOfHref)

    let sectionTopOffset = $(valueOfHref).offset().top;
    console.log(sectionTopOffset)

    $("html, body").animate({scrollTop: sectionTopOffset}, 1000)
})

$(".dec:first").css("display","block")

$(".singers h3").click(function(){
    $(this).next().slideToggle();

    $(".dec").not($(this).next()).slideUp(500)
})


var targetDate = new Date("April 17, 2023 00:00:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var timeRemaining = targetDate - now;

    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    $("#day").html(days + " D");
    $("#hour").html(hours + " H")
    $("#minute").html(minutes + " M")
    $("#second").html(seconds + " S")
}, 1000);
});


let max = 100;

$("textarea").keyup(function(){
    let x = max - $("textarea").val().length;

    $("#nember-charcter").text(max - $("textarea").val().length);

    if(x < 0){
        $("#Characyer").html("<span class='text-danger'>your available character finished</span>");
    }else{
        $("#Characyer").html(`<span id='nember-charcter' class='text-danger fw-bold fs-4'>${x}</span> Characyer Reamining`);
    }
})