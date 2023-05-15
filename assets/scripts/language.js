$(document).ready(() => {
    $(".lang-input").change(function() {
        setTimeout(() => {
            let lang = "/" + $(this).val();
            let lang_code = location.pathname.split("/")[1];
            location.pathname = (lang == "/en" ? "" : lang) + (lang_code.length != 2 ? location.pathname : location.pathname.substring(3));
        }, 200);
    });
    $(".mobile-language-input").change(function() {
        let lang = "/" + $(this).val();
        let lang_code = location.pathname.split("/")[1];
        location.pathname = (lang == "/en" ? "" : lang) + (lang_code.length != 2 ? location.pathname : location.pathname.substring(3));
    });
});