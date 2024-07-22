#!/usr/bin/node
const request = require('request');

const args = process.argv;
if (args.length < 3) {
  throw new Error('Not enough arguments');
}

const url = 'https://swapi-api.hbtn.io/api/films';
const id = parseInt(args[2]) - 1;

async function doStuff() {
	await request.get(url, (err, res, body) => {
		if (err) {
    			throw new Error(err);
  		}
  		if (res.statusCode !== 200) {
  			throw new Error('Status code not 200 : ' + res.statusCode);
  		}
  		const json = JSON.parse(body);
    		const film = json.results[id];
    		film.characters.forEach(character => {
      			request(character, (err, res, characterBody) => {
				if (err) { throw new Error(err); } 
        			if (res.statusCode !== 200) { throw new Error('Status Code != 200 : ' + res.statusCode); }
				console.log(JSON.parse(characterBody).name);
      			});
    		});
	});
}

doStuff();
