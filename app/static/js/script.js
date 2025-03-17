let timeLeft = 300; // 初期時間（5分）
let timerInterval;
let meditationInterval;

// 時間を「分:秒」に変換
function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

//スタートボタン
function startMeditation() {
    let circle = document.querySelector(".circle-container");
    //alert(circle)
    function animateBreathing() {
        document.getElementById("text").textContent = "鼻からゆっくり息を吸って...";
        circle.style.transform = "translate(-50%, -20%) scale(1.7)";
        setTimeout(() => {
            document.getElementById("text").textContent = "息を止めて...";
            circle.style.transform = "translate(-50%, -20%) scale(1.6)";
            setTimeout(() => {
                document.getElementById("text").textContent = "口からゆっくり息を吐いて...";
                circle.style.transform = "translate(-50%, -20%) scale(1)";
            }, 7000);
        }, 4000);
    }

    animateBreathing();
    meditationInterval = setInterval(animateBreathing, 19000); // 4 + 7 + 8 = 19秒

    // タイマー開始
    timeLeft = parseInt(document.getElementById("timeSelect").value);
    document.getElementById("timer").textContent = formatTime(timeLeft);
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = formatTime(timeLeft);
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            clearInterval(meditationInterval);
            document.getElementById("text").textContent = "瞑想終了！お疲れ様でした";
        }
    }, 1000);
}

//リセットボタン（ページをリロード）
function resetMeditation() {
    window.location.reload();
}

