#!/usr/bin/node
const fs = require('fs');

const args = process.argv;
if (args.length < 4) {
  throw new Error('Not enough arguments');
}

const filename = args[2];
const content = args[3];

fs.writeFileSync(filename, content);
