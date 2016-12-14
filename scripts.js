
function ListItem(value){

	var self = this;


	//Create and append item
	this.item = document.createElement("div");
	this.item.classList.add("item");
	document.getElementById("box-list").appendChild(this.item);

	this.itemName = document.createElement("div");
	this.itemName.classList.add("item-name");
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
		var first = document.querySelector(".item-name");
		console.log(first);
		console.log(self.itemName.parentNode);
		self.itemName.classList.add("important");
	});

}


//Create a new ListItem, text depends on input value
var buttonAdd = document.getElementById("button-add");
buttonAdd.addEventListener("click", function(){
  var listName = document.getElementById("input").value;
  new ListItem(listName);
});