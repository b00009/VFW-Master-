var food = ["pasta", "Salad", "Apple", "Pizza"];
	
	
	var showFood = function(){
		for (var i = 0; i <= food.length; i++){
		var current=0;
		var len=food.length;
		return function(){
			if (i==4){i=0;}
			var direction=1;
			if (current>=len) current=0;
			//$("#text").text(food[current]);
			current+=direction;
		}
	};
	//buttonNext).on("click",showFood);
	
	
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

buttonPrevious.addEventListener("click", showFood);
buttonNext.addEventListener("click", showFood);


