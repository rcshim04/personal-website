$(document).ready(() => {
    let count = $(".intro > .description-text-group > .description-text").length;

    let i = 0, j = 0, tick = 0;
    let pause = 0, state = 0;
    let typewriter = setInterval(() => {
        if(state == 0) {
            let description = $(`.intro > .description-text-group > #description-text-${i}`).text();
            $(".description > .animated-text").text(description.substring(0, j) + "|");
            if(tick % 2 == 0){
                j++;
            }
            if(j == description.length + 1) {
                state = 1;
                pause = tick + 50;
            }
        } else if(state == 1 && tick == pause) {
            state = 2;
        } else if(state == 2) {
            let description = $(`.intro > .description-text-group > #description-text-${i}`).text();
            $(".description > .animated-text").text(description.substring(0, j) + "|");
            j--;
            if(j == -1) {
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
    }, 25);
});