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
  let newPanel = object.createElement("div");
  newPanel.className = "panel panel-default";
  let newPanelBody = object.createElement("div");
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
  newGlyph.className = "glyphicon glyphicon-th-list"; //replate with switch to select glyph type
  newObjectIcon.appendChild(newGlyph);
  return newObjectIcon;
}

function buildObjectContent(content) {
  let newObjectContent = document.createElement("div");
  newObjectContent.className = "object-text";
  newObjectContent.innerHTML = content;
  return newObjectContent;
}
