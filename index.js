#!/usr/bin/env node

// shell.js https://blog.51cto.com/13869008/2173451
// const util = require("ggtool/util.js");
var shelljs = require('shelljs');

console.log(process.cwd());

// init express
let commands = [
    'echo init',
    'npm init -y',
    'git init',
    'echo node_modules > .gitignore',
    'npm install express -S --registry=https://registry.npm.taobao.org',
    'npm install nodemon -D --registry=https://registry.npm.taobao.org',
    'echo success'
]

for(let command of commands){
    shelljs.exec(command)
}
