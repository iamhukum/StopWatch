let startTime; // To store the start time
let elapsedTime = 0; // To store the elapsed time
let timerInterval; // To store the interval ID

// Function to start the stopwatch
function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTime, 10); // Update time every 10 milliseconds
}

// Function to stop the stopwatch
function stop() {
  clearInterval(timerInterval);
  elapsedTime = Date.now() - startTime;
  updateDisplay();
}

// Function to reset the stopwatch
function reset() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  updateDisplay();
}

// Function to update the time display
function updateTime() {
  elapsedTime = Date.now() - startTime;
  updateDisplay();
}

// Function to update the time display in the format HH:MM:SS
function updateDisplay() {
  const milliseconds = Math.floor(elapsedTime % 1000 / 10);
  const seconds = Math.floor(elapsedTime / 1000 % 60);
  const minutes = Math.floor(elapsedTime / 1000 / 60 % 60);
  const hours = Math.floor(elapsedTime / 1000 / 60 / 60);

  const timeDisplay = document.querySelector('.time');
  timeDisplay.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds)}`;
}

// Helper function to pad single digits with leading zeros
function pad(value) {
  return value.toString().padStart(2, '0');
}