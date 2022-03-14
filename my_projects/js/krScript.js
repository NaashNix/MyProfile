var count = 0;
$("#btn").click(function () {
    if (count == 0) {
        $(".allLights").css("animationPlayState", "paused");
        $("#btn").attr("src", "https://img.icons8.com/ios-filled/100/000000/play--v1.png")
        count++;
    } else {
        $(".allLights").css("animationPlayState", "running");
        $("#btn").attr("src", "https://img.icons8.com/ios-glyphs/100/000000/pause--v1.png")
        count--;

    }
});