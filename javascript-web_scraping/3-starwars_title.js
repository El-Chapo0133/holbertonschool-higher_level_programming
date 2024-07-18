#!/usr/bin/node
const request = require('request');

const args = process.argv;
if (args.length < 3) {
  throw new Error('Not enough arguments');
}

const url = 'https://swapi-api.hbtn.io/api/films/' + args[2];

request(url, (err, res, body) => {
  if (err) {
    throw new Error(err);
  }
  if (res.statusCode != 200) {
    throw new Error('Status code not 200 : ' + res.statusCode);
  }
  body.json().then(data => {
    console.log(data.title);
  });
});
