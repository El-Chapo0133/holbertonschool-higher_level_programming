fetch("https://swapi-api.hbtn.io/api/people/5/?format=json")
	.then(response => response.json())
	.then(data => {
		let div = document.getElementById("character");
		div.innerHTML = data.name;
	})
	.catch(err => console.error(err));

