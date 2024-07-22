#!/usr/bin/node
const request = require('request');

const args = process.argv;
if (args.length < 3) {
  throw new Error('Not enough arguments');
}

const url = args[2];
const characterToFind = 'Wedge Antilles';
let correctUrl = '';
let count = 0;

async function doStuff() {
	await request.get(url, (err, res, body) => {
		if (err) {
    			throw new Error(err);
  		}
  		if (res.statusCode !== 200) {
  			throw new Error('Status code not 200 : ' + res.statusCode);
  		}
  		const json = JSON.parse(body);
  		for (let i = 0; i < json.results.length; i++) {
    			const film = json.results[i];
    			/*if (film.characters.includes('https://swapi-api.hbtn.io/api/people/18/')) { count++; } */
    			film.characters.forEach(character => {
      				request(character, (err, res, characterBody) => {
        				if (err) { throw new Error(err); } 
        				if (res.statusCode !== 200) { throw new Error('Status Code != 200 : ' + res.statusCode); }
        				if (JSON.parse(characterBody).name === characterToFind) { correctUrl = character; count++; }
      				});
    			});
  		};
	});
		console.log(count);
}

doStuff();
