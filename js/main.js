function toggleWindow() {
  let windowDisplay = document.getElementById('window');
  console.log(windowDisplay.style.display);
  windowDisplay.style.display === 'inline' ? windowDisplay.style.display = 'none' : windowDisplay.style.display = 'inline';
  console.log("Just tried to toggle the window.");
};

function toggleSearch() {
  let searchBar = document.getElementById('object-search');
  searchBar.style.display === 'block' ? searchBar.style.display = 'none' : searchBar.style.display = 'block';
  console.log("Just tried to toggle the search bar.");
};

function destroyFeed() {
  let x = document.getElementById("learning-feed");
  x.innerHTML = "";
  console.log("Feed destroyed!!");
}

function filterFeedByType(type) {
  let newArray = [];
  for (var i in myObject) {
    if (myObject[i].type == type) {
      newArray.push(myObject[i]);
    }
  }
  return newArray;
}

function showFilteredFeed(type) {
  buildFeed(filterFeedByType(type));
}

function buildFeed(feedArray) {
  destroyFeed();
  console.log("Attempting to build feed.");
  let feedBox = document.getElementById("learning-feed");
  for (var i = 0; i < feedArray.length; i++) {
    let x = buildLearningObject(feedArray[i]);
    feedBox.appendChild(x);
  }
}

function buildLearningObject(object) {
  let newLearningObject = document.createElement("div");
  newLearningObject.className = "learning-object";
  newLearningObject.appendChild(buildTimestamp(object.created));
  newLearningObject.appendChild(buildPanel(object));
  return newLearningObject;
}

function buildTimestamp(timestamp) {
  let newTimestamp = document.createElement("div");
  newTimestamp.className = "timestamp";
  newTimestamp.innerHTML = timestamp;
  return newTimestamp;
}

function buildPanel(object) {
  let newPanel = document.createElement("div");
  newPanel.className = "panel panel-default";
  let newPanelBody = document.createElement("div");
  newPanelBody.className = "panel-body object-content-wrapper";
  newPanelBody.appendChild(buildObjectIcon(object.type));
  newPanelBody.appendChild(buildObjectContent(object.content));
  newPanel.appendChild(newPanelBody);
  return newPanel;
}

function buildObjectIcon(type) {
  let newObjectIcon = document.createElement("div");
  newObjectIcon.className = "object-icon";
  let newGlyph = document.createElement("span");
  newGlyph.className = chooseGlyph(type);
  // newGlyph.className = "glyphicon glyphicon-th-list"; //replate with switch to select glyph type
  newObjectIcon.appendChild(newGlyph);
  return newObjectIcon;
}

function chooseGlyph(type) {
  switch (type) {
    case "reflection":
      return "glyphicon glyphicon-eye-open";
    case "commit":
      return "glyphicon glyphicon-th-list";
    case "resource":
      return "glyphicon glyphicon-book";
    default:
      console.log("This isn't an object type I've seen before. Can't find associated glyph.");

  }
}

function buildObjectContent(content) {
  let newObjectContent = document.createElement("div");
  newObjectContent.className = "object-text";
  newObjectContent.innerHTML = content;
  return newObjectContent;
}
