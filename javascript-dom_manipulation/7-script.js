let div = document.getElementById("add_item");
let list = document.querySelector("ul");

fetch("https://swapi-api.hbtn.io/api/films/?format=json")
	.then(response => response.json())
	.then(data => {
		data.results.forEach(film => {
			let li = document.createElement("li");
			li.appendChild(document.createTextNode(film.title));
			list.appendChild(li);
		});
	})
	.catch(err => console.error(err));
