
var tabGroup = Ti.UI.createTabGroup();

var mainWindow = Ti.UI.createWindow({
	title: "Main Menu",
	tabBarHidden:true,
	modal:true
	});

var tab = Ti.UI.createTab({
    title:"",
    window: mainWindow
});
 

var buttonPrevious = Ti.UI.createView({
	backgroundColor: "#23ba00",
	top: 350,
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
	top: 290,
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

tabGroup.addTab(tab);
tabGroup.open();
buttonPrevious.add(buttonTextP);
buttonNext.add(buttonTextN);
mainWindow.add(buttonPrevious);
mainWindow.add(buttonNext);
mainWindow.open();