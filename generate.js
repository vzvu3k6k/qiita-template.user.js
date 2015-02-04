#!/usr/bin/env node

var fs = require('fs');

var template = fs.readFileSync(process.argv[3]).toString().trim().replace(/'/g, "\\'").replace(/\n/g, "\\\n");
var userjs = fs.readFileSync(process.argv[2]).toString().replace('$template', template);

console.log(userjs.trim()); // console.log() always appends "\n" at the end of its output.
