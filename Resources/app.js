
var mainWindow = Ti.UI.createWindow({
	title: "Event Listeners & Event Holders",
	modal: true,
	backgroundColor: "#333"
});


var buttonPrevious = Ti.UI.createView({
	backgroundColor: "#23ba00",
	top: 400,
	left: 20,
	right: 20,
	borderRadius: 5,
	height: 50
});

var buttonTextP = Ti.UI.createLabel({
	color:"#fff",
	font: {fontSize: 16, fontFamily: "Arial"},
	textAlign:"center",
	text: "Previous"
});

var buttonNext = Ti.UI.createView({
	backgroundColor: "#23ba00",
	top: 340,
	left: 20,
	right: 20,
	borderRadius: 5,
	height: 50
});

var buttonTextN = Ti.UI.createLabel({
	color:"#fff",
	font: {fontSize: 16, fontFamily: "Arial"},
	textAlign:"center",
	text: "Next"
});

var foodFile = require('food');

buttonPrevious.add(buttonTextP);
buttonNext.add(buttonTextN);
mainWindow.add(buttonPrevious);
mainWindow.add(buttonNext);
mainWindow.open();
