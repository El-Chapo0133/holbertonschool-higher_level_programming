let div = document.getElementById("add_item");
let list = document.querySelector("ul");

div.onclick = function(e) {
	let li = document.createElement("li");
	li.appendChild(document.createTextNode("Item"));
	list.appendChild(li);
}
