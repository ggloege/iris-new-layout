function toggleWindow() {
  let windowDisplay = document.getElementById('window');
  console.log("The current value of windowDisplay is " + windowDisplay.style.display);
  if (windowDisplay.style.display === 'none') {
    windowDisplay.style.display = 'inline';
  } else {
    windowDisplay.style.display = 'none';
  }
  console.log("Just tried to toggle the window.")
};

function alertCheck() {
  alert("This is working!");
}
