$(document).ready(() => {
    let stored_theme = localStorage.getItem("theme");
    let target_theme = "light";
    if(stored_theme === "light") {
        target_theme = "dark";
    }
    if(stored_theme) {
        $("#theme-toggle").prop("checked", stored_theme === "light");
        $(":root").attr("data-theme", stored_theme);
    }
    $("#theme-toggle").click(() => {
        let current_theme = $("html").attr("data-theme");
        let target_theme = "light";

        if(current_theme === "light") {
            target_theme = "dark";
        }
        $(":root").attr("data-theme", target_theme);
        $("#theme-toggle").prop("checked", target_theme === "light");
        localStorage.setItem("theme", target_theme);
    });
    setTimeout(() => {
        $("#theme-style").html("* { transition: color 0.2s linear, background-color 0.2s linear, color 0.2s linear, fill 0.2s linear, filter 0.2s linear; }");
    }, 500);
});