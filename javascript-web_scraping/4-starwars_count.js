#!/usr/bin/node
const request = require('request');

const args = process.argv;
if (args.length < 3) {
  throw new Error('Not enough arguments');
}

const url = args[2];
const characterToFind = 'Wedge Antilles';
let count = 0;

function req (url) {
  return new Promise((resolve, reject) => {
    request.get(url, (err, res, body) => {
      if (err) { reject(err); }
      if (res.statusCode !== 200) { reject(new Error('Status Code != 200 : ' + res.statusCode)); }
      resolve(body);
    });
  });
}
async function doStuff () {
  const body = await req(url).catch(err => { console.error(err); return 0; });
  const json = JSON.parse(body);

  let allPromises = [];
  for (let i = 0; i < json.results.length; i++) {
    const film = json.results[i];
    for (let j = 0; j < film.characters.length; j++) {
      const character = film.characters[j];
      allPromises.push(req(character).then(characterBody => {
        const characterJson = JSON.parse(characterBody);
        if (characterJson.name === characterToFind) { count++; }
      }).catch(err => {  }));
    }
  }

  await Promise.all(allPromises);
  /*await request.get(url, (err, res, body) => {
    if (err) {
      throw new Error(err);
    }
    if (res.statusCode !== 200) {
      throw new Error('Status code not 200 : ' + res.statusCode);
    }
    const json = JSON.parse(body);
    for (let i = 0; i < json.results.length; i++) {
      const film = json.results[i];
      film.characters.forEach(character => {
      	request(character, (err, res, characterBody) => {
          if (err) { throw new Error(err); } 
          if (res.statusCode !== 200) { throw new Error('Status Code != 200 : ' + res.statusCode); }
          if (JSON.parse(characterBody).name === characterToFind) { count++; }
        });
      });
    };
  });*/
  console.log(count);
}

doStuff();
