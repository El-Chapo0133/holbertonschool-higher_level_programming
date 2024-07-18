#!/usr/bin/node
const fs = require('fs');


const args = process.argv;
if (args.length < 3) {
  throw new Error('Not enough arguments');
}
const filename = args[2];

const content = fs.readFileSync(filename);
console.log(content.toString())
