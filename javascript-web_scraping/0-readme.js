#!/usr/bin/node

let args = process.argv;
if (args.length < 3) {
	throw new Error("Not enough arguments");
}
const filename = args[2];

const fs = require("fs");

const content = fs.readFileSync(filename);
console.log(content.toString())
