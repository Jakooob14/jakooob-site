function lifeLost(){
    //timer();
    lives--;
    if (lives == 2){
      //timer();
      document.getElementById('life1').style.display = 'none';
      playhit();
    } else if (lives == 1){
      //timer();
      document.getElementById('life2').style.display = 'none';
      playhit();
    } else{
      if (getCookie("highscore") < pnts){
        setCookie("highscore", pnts, 365)
      } else {
      document.getElementById('timerms').innerHTML="9";
      document.getElementById('life3').style.display = 'none';
      playdeath();
      alert("Game Over! \n Score: " + pnts + "\n Highscore: " + getCookie("highscore"));
      location.reload();
      }
    }
}



function play() {
  var audio = new Audio('https://cdn.glitch.com/9954373f-e1dc-4416-a24c-1fbf21fcaf68%2Fcoin.wav?v=1632065805956');
  audio.play();
}
function playhit() {
  var audio = new Audio('https://cdn.glitch.com/9954373f-e1dc-4416-a24c-1fbf21fcaf68%2Fhit.wav?v=1632066244401');
  audio.play();
}
function playdeath() {
  var audio = new Audio('https://cdn.glitch.com/9954373f-e1dc-4416-a24c-1fbf21fcaf68%2Fdeath.wav?v=1632066348645');
  audio.play();
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var pnts = 0;
var lives = 3;

function checkCookie() {
  let hs = getCookie("highscore");
  if (hs != "") {
   //
  } else {
    if (hs != "" && hs != null) {
      setCookie("highscore", 0, 365);
    }
  }
}

const btn = document.getElementById('btn');
const page = document.getElementById('page');

var start = false;
var startms = 15;
var ms = 15;
checkSize();
  function checkSize(){
    var height = document.getElementById("page").clientHeight
    var width = document.getElementById("page").clientWidth
    
    if (width > 1000 && height > 900){
      //
    } else {
      ms = 8;
      startms = 8;
    }
  }

  btn.onclick = function() {
    if (start == false){
      timer();
    } else ms = startms;
    pnts++;
    document.getElementById('points').innerHTML = pnts;
    btn.style.top = Math.floor((Math.random() * document.getElementById('wrapper').clientHeight) + 1) + "px";
    btn.style.left = Math.floor((Math.random() * document.getElementById('wrapper').clientWidth) + 1) + "px";
    play();
    start = true;
  };
  page.onclick = function(){
    if (start == false){
      timer();
    } else ms = startms;
    lifeLost();
    start = true;
  }

    
//Timer
function timer(){
  var timerms = setInterval(function(){
        document.getElementById('timerms').innerHTML=ms;
        ms--;
    //check();
          if (ms == 0) {
            ms = startms;
            lifeLost();
          }
      
    }, 100);
}