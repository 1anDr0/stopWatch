let hundreds = 0;
let sec = 0;
let minute = 0;
let timer; // För att hålla koll på intervallet

// Hämtar HTML-elementen
let hundredsElement = document.getElementById("hundreds");
let secElement = document.getElementById("second");
let minuteElement = document.getElementById("minute");

// Hämtar knappar
let play = document.getElementById("start");
let stopWatch = document.getElementById("stop");
let resetWatch = document.getElementById("reset");

function start() {
  timer = setInterval(count, 10);
}

function count() {
  hundreds++;
  if (hundreds === 100) {
    hundreds = 0;
    sec++;
    if (sec === 60) {
      sec = 0;
      minute++;
    }
  }

  // Uppdatera HTML med den aktuella tiden
  hundredsElement.textContent = hundreds < 10 ? "0" + hundreds : hundreds;
  secElement.textContent = sec < 10 ? "0" + sec : sec;
  minuteElement.textContent = minute < 10 ? "0" + minute : minute;
}

function stop() {
  clearInterval(timer); // Stoppa timern
}

function reset() {
  clearInterval(timer); // Stoppa timern om den är igång
  hundreds = 0;
  sec = 0;
  minute = 0;

  // Uppdatera HTML med nollställd tid
  hundredsElement.textContent = "00";
  secElement.textContent = "00";
  minuteElement.textContent = "00";
}
