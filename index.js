#!/usr/bin/env node

// shell.js https://blog.51cto.com/13869008/2173451
// const util = require("ggtool/util.js");

// const expressUtils = require('./utils/express-utils')
const genTpl = require("./gen")

console.log(process.cwd());

// console.log(process.argv);
// console.log(argv);

function help() {
    console.log("commands: ");
    console.log("eg: $ ggtool gen express");
    console.log("params: express、flask");
}

const commandMap = {
    "help": help,
    "gen": genTpl
}

var command = commandMap[process.argv[2]]
if (!command) {
    command = help
}
command(process.argv[3]);
