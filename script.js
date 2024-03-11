let timer = 60;
let score = 0;
let hitrn = 0;
function increaseScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}
function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = hitrn;
}
function makeBubble() {
  let clutter = "";
  for (let i = 1; i <= 147; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

function startTimer() {
  let start = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerValue").textContent = timer;
    } else {
      clearInterval(start);
      document.querySelector("#pbtm").innerHTML =`<h1>game over</h1>`;
    }
  }, 1000);
}
document.querySelector("#pbtm").addEventListener("click", function (dets) {
  let clickedNumber = Number(dets.target.textContent);
  if (clickedNumber === hitrn) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});
startTimer();
makeBubble();
getNewHit();
