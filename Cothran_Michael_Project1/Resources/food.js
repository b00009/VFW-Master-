var food = ["pasta", "Salad", "Apple", "Pizza"];
	counter=0;

	var displayAlert = function(){
		console.log (counter);
	quoteText.text=food[counter];
	if (counter === food.length-1){
		counter=0;	
	}
	else {counter=counter+1};
};		
	var getPrevious = function(){
		quoteText.text=food[counter];
	if (counter === 0){
		counter=food.length-1;
	}
	else {counter=counter-1};

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


buttonPrevious.addEventListener("click", getPrevious);
buttonNext.addEventListener("click", displayAlert);