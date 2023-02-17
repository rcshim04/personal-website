$(document).ready(function() {
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let key = "";
    for(let i = 0; i < lower.length / 2; i++) {
        key += lower[i];
        key += upper[upper.length - i - 1];
        key += lower[lower.length - i - 1];
        key += upper[i];
    }
    key += "0123456789.";
    console.log(key);
    $(".tag").each(function() {
        let text = $(this).text();
        let sum = 0;
        for(let i = 0; i < text.length; i++) {
            sum += key.indexOf(text[i]);
        }
        $(this).css("background-color", `hsl(${sum * 360 / key.length}deg 100% 85%)`)
    });
});