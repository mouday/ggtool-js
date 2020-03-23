const fs = require("fs")
var path = require('path');

function resolve(name) {
    return path.join(__dirname, path.join("template", name))
}

module.exports = function genTpl(name) {
    const nameMap = {
        "express": {
            "src": "express.tpl",
            "dest": "express-demo.js",
        },
        "flask": {
            "src": "flask.tpl",
            "dest": "flask-demo.py",
        },
    }
    // console.log(name);

    const config = nameMap[name]

    if (!config) {
        console.log("can not get template file:", name);
        return
    }
    // console.log('__dirname : ' + __dirname)
    const src = resolve(config.src);
    const dest = `./${config.dest}`

    // console.log("copy:", src, dest);
    // 文件不存在再进行拷贝
    if (fs.existsSync(dest)) {
        console.log("文件已存在：", dest);
    } else {
        fs.copyFile(src, dest, function (err) {
            if (err) console.log(err)
            else console.log('copy file succeed');
        })
    }

}
