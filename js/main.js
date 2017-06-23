function toggleWindow() {
  let windowDisplay = document.getElementById('window');
  console.log(windowDisplay.style.display);
  windowDisplay.style.display === 'inline' ? windowDisplay.style.display = 'none' : windowDisplay.style.display = 'inline';
  console.log("Just tried to toggle the window.");
};

function alertCheck() {
  alert("This button is firing a function!");
};

function toggleSearch() {
  let searchBar = document.getElementById('object-search');
  searchBar.style.display === 'block' ? searchBar.style.display = 'none' : searchBar.style.display = 'block';
  console.log("Just tried to toggle the search bar.");
};

function dangerAlert() {
  alert("This will destroy this learning object forever. You sure you want to do that?");
};

function doubleAlert() {
  alertCheck();
  dangerAlert();
}

function hideFeed() {
  let feed = document.getElementsByClassName('learning-object');
  console.log(feed);
  for (var i = 0; i < feed.length; i++) {
    feed[i].style.display = 'none';
  };
}

function showFeed() {
  let feed = document.getElementsByClassName('learning-object');
  console.log(feed);
  for (var i = 0; i < feed.length; i++) {
    feed[i].style.display = 'block';
  };
}


function showFilteredFeed(objectType) {
  let feed = document.getElementsByClassName('learning-object');
  console.log(feed);
  for (var i = 0; i < feed.length; i++) {
    console.log(feed[i]);
    if (feed[i].className === objectType) {
      feed[i].style.display = 'block';
    }
  }
}
