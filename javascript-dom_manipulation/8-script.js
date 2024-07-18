fetch("https://hellosalut.stefanbohacek.dev/?lang=fr")
	.then(response => response.json())
	.then(data => {
		let div = document.getElementById("hello");
		div.innerHTML = data.hello;
	})
	.catch(err => console.error(err));

