

var tableColumns = 4;
var tableRows = 3; // not including header


// 1. Create the content

	// 1.1 Create the Table
		var table = document.createElement("table");

		// add header row to table
		var tableHead = document.createElement("thead");
		var tableHeadRow = document.createElement("tr");

		for(var col = 0; col < tableColumns; col++){
			var newHeading = document.createElement("th");
			var headingID = col + 1;
			newHeading.textContent = "Heading" + headingID;
			tableHeadRow.appendChild(newHeading);
		}

		// add row to tablehead and tablehead to table
		tableHead.appendChild(tableHeadRow);
		table.appendChild(tableHead);


	// add table content rows
		var tableBody = document.createElement("tbody");
		tableBody.id = "tableBody"

		for(var row = 0; row < tableRows; row++){
			var newRow = document.createElement("tr");
			var rowID = row + 1;

			for(var col = 0; col < tableColumns; col++){
				var newCell = document.createElement("td");
				var colID = col + 1;
				newCell.id = rowID + "," + colID; // e.g cell 2,3 has id "2,3"
				newCell.textContent = rowID + ", " + colID;
				newRow.appendChild(newCell);
			}

			tableBody.appendChild(newRow);
		}

		table.appendChild(tableBody);


		// add constructed table to body
		document.body.appendChild(table);


	// 1.2 Create Buttons

		// Create the Directional Buttons
		var directionGroup = document.createElement("div");

		var directions = ["Up", "Down", "Left", "Right"];

		for (var i = 0; i < directions.length; i++) {
			var newDbutton = document.createElement("button");
			newDbutton.id = directions[i]+"Button";
			newDbutton.textContent = directions[i].toUpperCase();

			directionGroup.appendChild(newDbutton);
		}

		document.body.appendChild(directionGroup);


		// Create the Mark Button
		var markGroup = document.createElement("div");

		var markButton = document.createElement("button");
		markButton.id = "MarkButton";
		markButton.textContent = "MARK";
		markGroup.appendChild(markButton);

		document.body.appendChild(markGroup);




// select a cell
function selectCell(row, col){

	// "Deselect" (aka remove border) on all cells
	var deselectCells = document.getElementsByTagName("td");
	for (var i = 0; i < deselectCells.length; i++){
		deselectCells[i].style.border = "0px solid black";
	}

	// Select (aka add border) to specified cell
	var id = row + "," + col;
	document.getElementById(id).style.border = "2px solid black";
}



// "mark" the first field
function markCell(row, col){
	var id = row + "," + col;
	document.getElementById(id).style.background = "yellow";
}



var currentRow = 1;
var currentCol = 1;
selectCell(currentRow, currentCol);



function up() {
	if (currentRow > 1) {
		currentRow--;
		selectCell(currentRow, currentCol);
	}
}

function down() {
	if (currentRow < tableRows) {
		currentRow++;
		selectCell(currentRow, currentCol);
	}
}

function left() {
	if (currentCol > 1) {
		currentCol--;
		selectCell(currentRow, currentCol);
	}
}

function right() {
	if (currentCol < tableColumns) {
		currentCol++;
		selectCell(currentRow, currentCol);
	}
}


function markCurrent(){
	markCell(currentRow, currentCol);
}






document.getElementById("UpButton").addEventListener("click", up);
document.getElementById("DownButton").addEventListener("click", down);
document.getElementById("LeftButton").addEventListener("click", left);
document.getElementById("RightButton").addEventListener("click", right);
document.getElementById("MarkButton").addEventListener("click", markCurrent);