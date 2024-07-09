const keys = document.querySelectorAll(".key");
const whiteKeys = document.querySelectorAll(".key.white");
const blackKeys = document.querySelectorAll(".key.black");

keys.forEach(key => key.addEventListener("click", handleKeyClick));

function handleKeyClick(event) {
    playKey(event.target);
}

function playKey(key) {
    const keyAudio = document.getElementById(key.dataset.note);
    if (keyAudio) {
        keyAudio.currentTime = 0;
        keyAudio.play();
        key.classList.add("active");
        keyAudio.addEventListener("ended", () => {
            key.classList.remove("active");
        });
    }
}
