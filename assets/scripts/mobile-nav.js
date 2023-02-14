$(document).ready(function() {
    $(".hamburger-menu").click(function() {
        $(".hamburger-menu").removeClass("active");
        $(".close-menu").addClass("active");
        $(".hamburger-menu").css("animation", "spin-out 0.3s ease 1");
        $(".close-menu").css("animation", "spin-in 0.3s ease 1");
        $(".mobile-nav").css("left", "0");
    });
    $(".close-menu").click(function() {
        $(".hamburger-menu").addClass("active");
        $(".close-menu").removeClass("active");
        $(".hamburger-menu").css("animation", "spin-in 0.3s ease 1");
        $(".close-menu").css("animation", "spin-out 0.3s ease 1");
        $(".mobile-nav").css("left", "100%");
        $(".dropdown-content-mobile").css("left", "100%");
    });
    $(".dropdown-trigger-mobile").click(function() {
        let id = $(this).attr("id").split("-")[0];
        console.log(id);
        $(`#${id}-dropdown-mobile`).css("left", "0");
    });
    $(".dropdown-back-mobile").click(function() {
        let id = $(this).attr("id").split("-")[0];
        $(`#${id}-dropdown-mobile`).css("left", "100%");
    })
})
