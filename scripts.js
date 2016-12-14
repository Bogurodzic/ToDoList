
function ListItem(value){

	var self = this;


	//Create and append item
	this.item = document.createElement("div");
	this.item.classList.add("item");
	document.getElementById("box-list").appendChild(this.item);

	this.itemName = document.createElement("div");
	this.itemName.classList.add("item-name", "normal");
	this.item.appendChild(this.itemName);

	//Create and append star button
	this.buttonStar =  document.createElement("div");
	this.buttonStar.classList.add("star");
	this.itemName.appendChild(this.buttonStar);
	this.buttonStar.innerHTML = "<i class='fa fa-star fa-2x' aria-hidden='true'></i>";

	//Create and append text of task
	this.itemText = document.createElement("p");
	this.itemText.classList.add("item-name-text");
	this.itemText.innerText = value;
	this.itemName.appendChild(this.itemText);

	//Create and append remove button
	this.buttonRemove = document.createElement("div");
	this.buttonRemove.innerHTML = "<i class='fa fa-minus fa-2x' aria-hidden='true'></i>"
	this.buttonRemove.classList.add("item-button");
	this.item.appendChild(this.buttonRemove);

  
	this.buttonRemove.addEventListener("click", function(){
    var child = this.parentNode;
    child.parentNode.removeChild(child);
  });

	//Click - Highlight whole task at green
	this.buttonStar.addEventListener("click", function(){

		//if task had important class, remove important class and move the task to the begginig of normal tasks
		if (self.itemName.classList.contains("important")){

			var firstNormalElement = document.querySelector(".normal");
			self.itemName.classList.remove("important");
			self.itemName.classList.add("normal");
				if (!firstNormalElement){
					document.getElementById("box-list").removeChild(self.item);
					document.getElementById("box-list").appendChild(self.item);
					return;
				}
			firstNormalElement = firstNormalElement.parentNode;
			document.getElementById("box-list").insertBefore(self.item, firstNormalElement);
			return;
		}

		self.itemName.classList.remove("normal");
		//add important class to chosen task
		self.itemName.classList.add("important");
		//look for the first task in the list
		var firstElement = document.querySelector(".item");
		//add move the task before first element in the list
		document.getElementById("box-list").insertBefore(self.item, firstElement);

	});

}

var listName = document.getElementById("input");

//Create a new ListItem, text depends on input value
var buttonAdd = document.getElementById("button-add");
buttonAdd.addEventListener("click", function(){
  	new ListItem(listName.value);
  	listName.value = "";
});



var submitHandler = function(){
	new ListItem(listName.value);
  	listName.value = "";
	return false;
}