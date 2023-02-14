$(document).ready(() => {
    let stored_theme = localStorage.getItem("theme") || "system";
    $(`#mobile-theme-toggle > div > input[value=${stored_theme}]`).prop("checked", true);
    if(stored_theme === "system") {
        stored_theme = (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    }
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
    $("#mobile-theme-toggle > div > input").change(() => {
        let target_theme = $("#mobile-theme-toggle > div > input:checked").val();
        console.log(target_theme);
        if(target_theme === "system") {
            $(":root").attr("data-theme", (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
        } else {
            $(":root").attr("data-theme", target_theme);
        }
        $("#mobile-theme-toggle > div > input:checked").prop("checked", true);
        localStorage.setItem("theme", target_theme);
    });
    setTimeout(() => {
        $("#theme-style").html("* { transition: color 0.2s linear, background-color 0.2s linear, color 0.2s linear, fill 0.2s linear, filter 0.2s linear; }");
    }, 500);
});