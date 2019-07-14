#!/usr/bin/env node

'use-strict'

const fs = require('fs');
const fsx = require('fs-extra');
const { pathTotal, filename } = require('./src')


const nameClass = filename || 'example';

const { class_cpp, class_header } = require('./src/templates')(nameClass);

fsx.ensureDir(`${pathTotal}/${nameClass}`,(err) => {
  fs.writeFile(`${pathTotal}/${nameClass}/index.c`,  class_cpp, (err) => {
    if (err) console.log(err);
    console.log("Successfully Written to File C.");
  });
  
  fs.writeFile(`${pathTotal}/${nameClass}/index.h`,  class_header, (err) => {
    if (err) console.log(err);
    console.log("Successfully Written to File H.");
  });
})
