let div = document.getElementById("add_item");
let list = document.querySelector("ul");

fetch("https://swapi-api.hbtn.io/api/people/5/?format=json")
	.then(response => response.json())
	.then(data => {
		data.films.forEach((film) => {
			fetch(film).then(filmResponse => filmResponse.json())
				.then(filmData => {
					let li = document.createElement("li");
					li.appendChild(document.createTextNode(filmData.title));
					list.appendChild(li);
					
				})
				.catch(err => console.error(err));
		});
	})
	.catch(err => console.error(err));
