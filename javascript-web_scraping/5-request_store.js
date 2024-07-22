#!/usr/bin/node
const request = require('request');
const fs = require('fs');

const args = process.argv;
if (args.length < 4) {
  throw new Error('Not enough arguments');
}

const url = args[2];
const filename = args[3];

request(url, (err, res, body) => {
  if (err) { console.error(err); }
  if (res.statusCode != 200) { console.error(res.statusCode); }
  fs.writeFileSync(filename, body);
});
