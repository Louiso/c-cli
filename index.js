const fs = require('fs');
const fsx = require('fs-extra');
const argv = require('yargs')
              .argv;

const dirUser = argv;

console.log(argv.d)

const rootPath = fsx.realpathSync(argv.d)


String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

const nameClass = 'persona';
const nameClassCapital = nameClass.capitalize()
const  class_cpp = `#include"index.h"

${nameClassCapital} new_${nameClassCapital}(){
  ${nameClassCapital} this = (${nameClassCapital})malloc(sizeof(struct ${nameClassCapital}));
  return this;
}
`;

const nameClassUpper = nameClass.toUpperCase()
const class_header = `#ifndef __${nameClassUpper}__
#define __${nameClassUpper}__
struct ${nameClassCapital}{

};

typedef struct ${nameClassCapital} * ${nameClassCapital};

${nameClassCapital} new_${nameClassCapital}();

#endif
`

fsx.ensureDir(`${rootPath}/${nameClass}`,(err) => {
  console.log('dentro de carpeta')
})

fs.writeFile(`${rootPath}/${nameClass}/index.c`,  class_cpp, (err) => {
  if (err) console.log(err);
  console.log("Successfully Written to File C.");
});


fs.writeFile(`${rootPath}/${nameClass}/index.h`,  class_header, (err) => {
  if (err) console.log(err);
  console.log("Successfully Written to File H.");
});


console.log(rootPath)