let div = document.getElementById("update_header");
let header = document.querySelector("header");

div.onclick = function(e) {
	header.innerHTML = "New Header!!!";
}
