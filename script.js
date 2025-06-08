let timer;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let isRunning = false;

function updateDisplay() {
  const display = document.getElementById("display");
  let hrs = hours < 10 ? "0" + hours : hours;
  let mins = minutes < 10 ? "0" + minutes : minutes;
  let secs = seconds < 10 ? "0" + seconds : seconds;
  let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;
  display.textContent = `${hrs}:${mins}:${secs}.${ms}`;
}

function startStopwatch() {
  if (!isRunning) {
    timer = setInterval(() => {
      milliseconds += 1;
      if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
      }
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
      updateDisplay();
    }, 10);
    isRunning = true;
  }
}

function pauseStopwatch() {
  clearInterval(timer);
  isRunning = false;
}

function resetStopwatch() {
  clearInterval(timer);
  isRunning = false;
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
}

function lapTime() {
  const lapList = document.getElementById("laps");
  const newLap = document.createElement("li");
  newLap.textContent = document.getElementById("display").textContent;
  lapList.appendChild(newLap);
}

function clearLaps() {
  document.getElementById("laps").innerHTML = "";
}

function toggleMode() {
  document.body.classList.toggle("light-mode");
}

updateDisplay();
