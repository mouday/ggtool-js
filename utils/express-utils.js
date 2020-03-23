var shelljs = require('shelljs');

module.exports = function initExpress() {
    // init express
    let commands = [
        'echo init express',
        'npm init -y',
        'git init',
        'echo node_modules > .gitignore',
        'npm install express -S --registry=https://registry.npm.taobao.org',
        'npm install nodemon -D --registry=https://registry.npm.taobao.org',
        'echo success'
    ]

    for (let command of commands) {
        shelljs.exec(command)
    }
}