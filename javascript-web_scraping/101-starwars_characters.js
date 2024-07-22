#!/usr/bin/node
const request = require('request');

const args = process.argv;
if (args.length < 3) {
  throw new Error('Not enough arguments');
}

const url = 'https://swapi-api.hbtn.io/api/films';
const id = parseInt(args[2]) - 1;

function req (url) {
  return new Promise((resolve, reject) => {
    request.get(url, (err, res, body) => {
      if (err) { reject(err); }
      if (res.statusCode !== 200) { reject(new Error('Status Code != 200 : ' + res.statusCode)); }
      resolve(body);
    });
  });
}
async function printCharacters (urls) {
  for (let i = 0; i < urls.length; i++) {
    const characterBody = await req(urls[i]);
    console.log(JSON.parse(characterBody).name);
  }
}
async function doStuff () {
  const body = await req(url);
  const json = JSON.parse(body);
  const film = json.results[id];
  printCharacters(film.characters);
}

doStuff();
