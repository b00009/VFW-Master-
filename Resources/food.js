var food = ["pasta", "Salad", "Apple", "Pizza"];
var	counter=0;
	
	var displayAlert = function(){ 
        for (var i=0, item; i<food.length; i++) {
        counter= (counter + 1) % food.length;	
    	item = food[i];
        quoteText.text=food[i];
}	
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