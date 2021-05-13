const display = document.querySelector(".display");
const guess = document.getElementById("guess");
const reset = document.querySelector("button");
const body = document.querySelector("body");
const easyLevel = document.querySelector("[data-action='easy']");
const mediumLevel = document.querySelector("[data-action='medium']");
const hardLevel = document.querySelector("[data-action='hard']");



easyLevel.addEventListener("click", () => {
    display.textContent = "25 numbers";
    const easy = level(25);
    gues(easy);

})

mediumLevel.addEventListener("click", () => {
    display.textContent = "50 numbers";
    const medium = level(50);
    gues(medium);

})

hardLevel.addEventListener("click", () => {
    display.textContent = "100 numbers";
    const hard = level(100);
    gues(hard);
})


reset.addEventListener("click", () => {
    const lost = document.getElementById("lost");
    display.textContent = "You lose!"
    reload();
    lost.textContent++;

})

reset.addEventListener("mouseover", () => {
    reset.textContent = ">:D"

    reset.addEventListener("mouseleave", () => {
        reset.textContent = "Give up :("
    })
})

function level(num) {
    return Math.floor(Math.random() * num);
}

function gues(level) {
    let tries = 0;
    guess.addEventListener("keypress", (e) => {
        if (e.code === "Enter" && level < Number(guess.value)) {
            display.textContent = "Lower...";
            tries++;
        } else if (e.code === "Enter" && level > Number(guess.value)) {
            display.textContent = "Higher..";
            tries++;
        }
        if (e.code === "Enter" && level === Number(guess.value)) {
            const won = document.getElementById("won");
            tries++;
            won.textContent++;
            display.textContent = `You won after ${tries} tries!`
            reload();
        }
    })
}

function reload() {
    setTimeout(() => {
        display.textContent = "";
        guess.value = "";
        body.style.background = `${colorize()}`;
    }, 800);
}

function colorize() {
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;

    const r2 = Math.floor(Math.random() * 255) + 1;
    const g2 = Math.floor(Math.random() * 255) + 1;
    const b2 = Math.floor(Math.random() * 255) + 1;

    return `linear-gradient(to right, rgb(${r}, ${g}, ${b}), rgb(${r2}, ${g2}, ${b2}))`;
}