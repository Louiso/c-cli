String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

const genTemplate = (nameClass) => {
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
  return {
    class_cpp,
    class_header
  }
}

module.exports = genTemplate