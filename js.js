const bp = document.querySelector(".pbtm");
const time = document.querySelector("#time");
const hit = document.querySelector("#hit");
const score = document.querySelector("#score");
const panel = document.querySelector(".panel");
const fscore = document.querySelector("#fscore");
const result = document.querySelector(".result");
const play = document.querySelector("#restart");



function game(){
     panel.style.display="block"
        result.style.display="none"
let t = 60;
time.textContent = t;
let scoreval = 0;
score.textContent = scoreval;
function hits() {
  const num = Math.floor(Math.random() * 10 + 1);
  hit.textContent = num;
}
function timer() {
  var tint = setInterval(function () {
    t--;
    time.textContent = t;
    if (t == 0) {
        fscore.textContent =scoreval;
        panel.style.display="none"
        result.style.display="block"
      clearInterval(tint);

    }
  }, 1000);
}

function makebubble() {
  for (let i = 0; i < 120; i++) {
    const num = Math.floor(Math.random() * 10 + 1);
    const b = document.createElement("div");
    b.classList.add("bubble")
    b.textContent = num;
    bp.append(b);
  }
}
makebubble();
timer();
hits();

bp.addEventListener("click", function (e) {
  if (hit.textContent == e.srcElement.textContent) {
    scoreval+=10;
    score.textContent = scoreval;
  }
   else if((hit.textContent != e.srcElement.textContent)) {
    scoreval-=10;
    score.textContent = scoreval;
  }
  hits();
  bp.innerHTML = "";
  makebubble();
});


}

game();

play.addEventListener("click",function(){
game();
})