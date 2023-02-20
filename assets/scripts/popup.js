$(document).ready(function() {
    $(".project-img").click(function() {
        let id = $(this).attr("id");
        $(".popup").removeClass("active");
        $(`#popup-${id.substring(id.indexOf("-") + 1)}`).addClass("active");
    });
    $(".popup-close").click(function() {
        $(".popup").removeClass("active");
    });
    $(".overlay").click(function() {
        $(".popup").removeClass("active");
    });
});