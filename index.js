document.addEventListener("DOMContentLoaded", function(){
	createGrid()
	renderBot(currentPosition)

	const button = document.getElementById("move-button");
	const arrowKeys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];
	const movesContainer = document.getElementById("moves-container");
	

	document.addEventListener("keydown", function(e) {

		if(arrowKeys.includes(e.key)){
			let move = document.createElement("li");
			let moveLi = e.key.replace("Arrow", "");
			move.textContent = moveLi;
			movesContainer.appendChild(move);
			console.log(e.key);
		}
	});

	button.addEventListener("click", function() {
		console.log("clicked the button");
	});
})
