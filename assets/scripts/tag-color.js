$(document).ready(function() {
    $(".tag").each(function() {
        let text = $(this).text();
        let sum = 0;
        for(let i = 0; i < text.length; i++) {
            sum += text.codePointAt(i);
        }
        $(this).css("background-color", `hsl(${sum % 360}deg 100% var(--tag-light))`)
    });
});