const fs = require('fs');
const {writeFile} = require('fs/promises');
const newPageDir = "pages/test.vue";
const entry = require('prompt-sync')({sigint: true});
let vueFile = 'index.vue';
let vueFileContent = '<template><h1>Test</h1></template>';
let jsFile = 'script.js';
let jsFileContent = 'var test = null;';
let value;

module.exports.makePage = (pageName) => {
   fs.mkdirSync(`pages/${pageName}`);
   writeFile(vueFile, vueFileContent).then(console.log).catch(console.error);
   writeFile(jsFile, jsFileContent).then(console.log).catch(console.error);
};

// TODO:
// module.exports.make = (amount) => {
//   value = entry('Digite a quantidade de pastas: ');
// console.log(value);
//   if (amount === 1) {
    
//   } else {
    
//   } 
// };
