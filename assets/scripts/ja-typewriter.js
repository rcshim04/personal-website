$(document).ready(() => {
    let count = $(".intro > .description-text-group > .description-text").length;

    let i = 0, j = 0, tick = 0;
    let pause = 0, state = 0;
    let temp = "", text = "";
    let roma = 1;
    let typewriter = setInterval(() => {
        if(state == 0) {
            let description = $(`.intro > .description-text-group > #description-text-${i}`).text();
            if(description[j] == "~") {
                temp = "";
                let end = description.substring(j).indexOf("|") + j;
                console.log(description.substring(j + 1, end));
                text += description.substring(j + 1, end);
                j = end + 1;
            } else {
                if(tick % 2 == 0) {
                    temp += description[j];
                }
            }
            if(tick % 2 == 0) {
                j++;
            }
            $(".description > .animated-text").text(text + temp + "│");
            if(j >= description.length) {
                state = 1;
                pause = tick + 50;
            }
        } else if(state == 1 && tick == pause) {
            state = 2;
            j = 0;
            temp = text = "";
        } else if(state == 2) {
            let description = $(".description > .animated-text").text();
            $(".description > .animated-text").text(description.substring(0, description.length - 2) + "│");
            if(description.length == 1) {
                state = 3;
                pause = tick + 50;
                i++;
            }
        } else if(state == 3 && tick == pause) {
            state = 0;
        }
        tick++;
        if(i == count) {
            i = 0;
        }
    }, 32);
});