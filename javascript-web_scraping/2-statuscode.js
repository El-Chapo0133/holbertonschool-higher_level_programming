#!/usr/bin/node
const request = require('request');

const args = process.argv;
if (args.length < 3) {
  throw new Error('Not enough arguments');
}

const url = args[2];

request(url, (err, res, body) => {
	console.log('code: ', res.statusCode);
});
