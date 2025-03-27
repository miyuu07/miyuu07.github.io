document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript is connected!");
    alert("JavaScript is working!");

    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
    const message = document.getElementById("message");

    if (!yesBtn || !noBtn || !message) {
        console.error("One or more elements not found!");
        return;
    }

    yesBtn.addEventListener("click", function () {
        message.style.display = "block";
    });

    noBtn.addEventListener("mouseover", function () {
        const maxX = window.innerWidth - noBtn.clientWidth;
        const maxY = window.innerHeight - noBtn.clientHeight;
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noBtn.style.position = "absolute";
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    });
});