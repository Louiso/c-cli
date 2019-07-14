const fsx = require('fs-extra');
const path = require('path')
const argv = require('yargs')
              .argv;

const arrayDir = argv.name.split('/')
let filename = arrayDir.pop();
let dirname = arrayDir.join('/')

console.log(filename)
console.log(dirname)

if(filename === '.'){
  filename = 'example'
}

const rootPath = fsx.realpathSync('.')

const pathTotal = path.resolve(rootPath, dirname)

module.exports.pathTotal = pathTotal
module.exports.filename = filename