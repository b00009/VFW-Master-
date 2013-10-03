var food = ["pasta", "Salad", "Apple", "Pizza"];
	
	
	var displayAlert = function(){
		for(var i=0, j=food.length; i<j; i++)
		quoteText.text=food[1];
	
	//for(var i=0, j=food.length; i<j; i++){
};		
	
	var quoteView = Ti.UI.createView({
	backgroundColor: "#fff",
	height: 150,
	top: 50,
	left: 20,
	right: 20,
	borderRadius: 5

});


var quoteText = Ti.UI.createLabel({
	text: "click below to begin",
	font: {fontSize: 20, fontFamily: "Arial"},
	textAlign: "center"
});
	
	quoteView.add(quoteText);
	mainWindow.add(quoteView);


buttonPrevious.addEventListener("click", displayAlert);
buttonNext.addEventListener("click", displayAlert);