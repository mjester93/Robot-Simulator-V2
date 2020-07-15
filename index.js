document.addEventListener("DOMContentLoaded", function(){
	createGrid()
	renderBot(currentPosition)

	const button = document.getElementById("move-button");
	const arrowKeys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];
  const movesContainer = document.getElementById("moves-container");
  
  const moveLi = (li) => {
    let dataMove = li.getAttribute("data-move");
    setInterval(move(dataMove), 5000);
    li.remove();
  }

  const deleteMostRecentLi = () => {
    let listOfLis = document.querySelectorAll("li");

    if (listOfLis.length !== 0) {
      listOfLis[listOfLis.length - 1].remove();
    }
  }
	

	document.addEventListener("keydown", function(e) {
		if(arrowKeys.includes(e.key)){
      let move = document.createElement("li");
      let moveLi = e.key.replace("Arrow", "").toLowerCase();
      move.setAttribute('data-move', moveLi);
      
			move.textContent = moveLi;
			movesContainer.appendChild(move);
    }
    else if (e.key === "Backspace") {
      deleteMostRecentLi();
    }
	});

	button.addEventListener("click", function() {
    document.querySelectorAll("li").forEach(li => setInterval(moveLi(li), 5000))
  });
})


