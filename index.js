const fs = require('fs');
const {writeFile} = require('fs/promises');
const newPageDir = "pages/test.vue";
const entry = require('prompt-sync')({sigint: true});
let vueFile = 'index.vue';
let vueFileContent = '<template><h1>Test</h1></template><script type="text/javascript" src="./script.js" /><style scoped type="text/css" src="./style.css" />';
let jsFile = 'script.js';
let jsFileContent = "import { mapActions, mapState } from 'vuex' ; export default {}";
let value;

module.exports.makePage = (pageName) => {
   var path = `pages/${pageName}/`;
   fs.mkdirSync(`pages/${pageName}`);
   writeFile(path + vueFile, vueFileContent).then(() => {console.log('sucess!!')})
   .catch((error) => {console.error('Error!!')});
   writeFile(path + jsFile, jsFileContent).then(() => {console.log('sucess!!')})
   .catch((error) => {console.error('Error!!')});
};

// TODO:
// module.exports.make = (amount) => {
//   value = entry('Digite a quantidade de pastas: ');
// console.log(value);
//   if (amount === 1) {
    
//   } else {
    
//   } 
// };
