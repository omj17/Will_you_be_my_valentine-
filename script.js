let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");
let question = document.getElementById("question");

let yesSize = 1.2;
let noSize = 1.2;
let yesClickCount = 0;
let totalNoClicks = 0;
let angryStage = 0;

let tryAgainMode = false;


// ==============================
// RESET GAME
// ==============================

function resetGame() {
    question.innerText = "Will you be my Valentine? 💖";

    yesBtn.innerText = "Yes 💘";
    noBtn.innerText = "No 😢";

    yesSize = 1.2;
    noSize = 1.2;
    yesClickCount = 0;
    totalNoClicks = 0;
    angryStage = 0;

    tryAgainMode = false;

    yesBtn.style.fontSize = yesSize + "rem";
    noBtn.style.fontSize = noSize + "rem";

    noBtn.style.position = "static";
}


// ==============================
// YES BUTTON
// ==============================

yesBtn.addEventListener("click", function() {

    // If we are on the "Try Again" screen
    if (tryAgainMode) {
        resetGame();
        return;
    }

    yesClickCount++;

    // First Yes click
    if (yesClickCount === 1) {
        question.innerText = "Do you really mean it? 🥺💖";
        return;
    }

    // Second Yes click
    if (yesClickCount === 2) {
        document.body.innerHTML =
            "<h1 style='margin-top:100px;color:#d63384;'>I love you my love 🥰💖🥰💖</h1>";

        startHeartRain();
    }
});


// ==============================
// NO BUTTON
// ==============================

noBtn.addEventListener("click", function() {

    // If we are on the "Try Again" screen
    if (tryAgainMode) {
        resetGame();
        return;
    }

    totalNoClicks++;


    // ==========================
    // ANGRY PROGRESSION
    // ==========================

    if (totalNoClicks >= 10) {

        angryStage++;

        if (angryStage === 1) {
            question.innerText = "Will you be my Valentine? 😠";
        }

        else if (angryStage === 2) {
            question.innerText = "Will you be my Valentine? 😡";
        }

        else if (angryStage >= 3) {
            question.innerText = "Will you be my Valentine? 🤬";
        }
    }


    // ==========================
    // RANDOM EMOTIONAL TWIST
    // ==========================

    if (totalNoClicks < 10 && Math.random() < 0.2) {

        question.innerText = "you dont love me 😭";

        yesBtn.innerText = "Try Again";
        noBtn.innerText = "Try Again";

        tryAgainMode = true;

        return;
    }


    // ==========================
    // MAKE YES BUTTON BIGGER
    // ==========================

    yesSize += 0.4;

    yesBtn.style.fontSize = yesSize + "rem";


    // ==========================
    // MAKE NO BUTTON SMALLER
    // ==========================

    noSize -= 0.1;

    if (noSize > 0.5) {
        noBtn.style.fontSize = noSize + "rem";
    }


    // ==========================
    // MOVE NO BUTTON
    // ==========================

    let randomX =
        Math.random() * (window.innerWidth - 100);

    let randomY =
        Math.random() * (window.innerHeight - 100);

    noBtn.style.position = "absolute";

    noBtn.style.left = randomX + "px";

    noBtn.style.top = randomY + "px";
});


// ==============================
// FLOATING HEARTS
// ==============================

function createFloatingHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "💖";

    heart.style.left =
        Math.random() * window.innerWidth + "px";

    heart.style.fontSize =
        (20 + Math.random() * 30) + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 3) + "s";

    document.body.appendChild(heart);


    setTimeout(() => heart.remove(), 6000);
}


// Create a floating heart every 500 milliseconds
setInterval(createFloatingHeart, 500);


// ==============================
// HEART RAIN
// ==============================

function startHeartRain() {

    setInterval(() => {

        const rainHeart =
            document.createElement("div");

        rainHeart.classList.add("rainHeart");

        rainHeart.innerHTML = "💖";

        rainHeart.style.left =
            Math.random() * window.innerWidth + "px";

        document.body.appendChild(rainHeart);


        setTimeout(() => rainHeart.remove(), 3000);

    }, 150);
}
