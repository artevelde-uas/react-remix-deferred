const doc = require('mkdoc');
const pi = require('mkpi');
const abs = require('mkabs');
const out = require('mkout');
const { createWriteStream } = require('fs');


// Copy the generated README.md to the lib folder
doc('./src/readme-lib.md')
    .pipe(pi())
    // Convert relative URLs to absolute URLs
    .pipe(abs({
        base: 'https://github.com/artevelde-uas/react-component-template',
        images: true,
        imageBase: 'https://raw.githubusercontent.com/artevelde-uas/react-component-template/master'
    }))
    .pipe(out())
    .pipe(createWriteStream('./build/readme-lib.md'));
