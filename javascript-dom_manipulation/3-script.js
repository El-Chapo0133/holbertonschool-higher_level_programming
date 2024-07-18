let div = document.getElementById("toggle_header");
let header = document.querySelector("header");

div.onclick = function(e) {
	header.classList.toggle("green");
	header.classList.toggle("red");
}
