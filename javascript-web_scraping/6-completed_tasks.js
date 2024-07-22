#!/usr/bin/node
const request = require('request');

const args = process.argv;
if (args.length < 3) {
  throw new Error('Not enough arguments');
}

const url = args[2];

request(url, (err, res, body) => {
  if (err) { console.error(err); }
  if (res.statusCode !== 200) { console.error(res.statusCode); }
  const values = JSON.parse(body);
  let result = {};
  values.forEach(value => {
    if (value.completed) {
      if (result[value.userId] == undefined) { result[value.userId] = 0; }
      result[value.userId]++;
    }
  });
  console.log(result);
});
