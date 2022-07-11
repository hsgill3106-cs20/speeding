// Caught Speeding CS10 Review

// Variables to store HTML Elements
let determineBtn = document.getElementById("determine-btn");
let driverSpeedInput = document.getElementById("driver-speed");
let speedLimitInput = document.getElementById("speed-limit");
let outputSpan = document.getElementById("output");

// Add Event Listener to Calculate Button
determineBtn.addEventListener("click", determineBtnClicked);

function determineBtnClicked() {
  // Input
  let driverSpeed = +driverSpeedInput.value;
  let speedLimit = +speedLimitInput.value;

  // Process & Output
  outputSpan.innerHTML = determineTicket(driverSpeed, speedLimit);
}

// DETERMINE TICKET
function determineTicket(Speed, Limit) {
  if (Speed >= Limit + 20) {
    return "BIG TICKET";
  } else if (Speed > Limit) {
    return "SMALL TICKET";
  } else {
    return "NO TICKET";
  }
}
