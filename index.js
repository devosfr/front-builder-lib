const fs = require('fs');
const {writeFile} = require('fs/promises');
const newPageDir = "pages/test.vue";
const entry = require('prompt-sync')({sigint: true});
let vueFile = 'index.vue';
let vueFileContent = '<template>\n<h1>Test</h1>\n</template>\n\n<script type="text/javascript" src="./script.js" />\n<style scoped type="text/css" src="./style.css" />';
let jsFile = 'script.js';
let jsFileContent = "import { mapActions, mapState } from 'vuex' ;\n\n export default {}";
let styleFile = 'style.css';
let value;

module.exports.makePage = (pageName) => {
   var path;
   var lastPosition;
   var lastFolder;
   var count;
   if (pageName.indexOf('/') > -1) {
      var folders = pageName.split('/');
      count = folders.length;
      folders.forEach((folder, index) => {
         switch (true) {
            case index > lastPosition:
               path = `pages/${lastFolder}/${folder}/`;
               console.log(path);
               fs.mkdirSync(path);
               writeFile(path + vueFile, vueFileContent);
               writeFile(path + jsFile, jsFileContent);
               writeFile(path + styleFile, '');
               break;

            default:
               path = `pages/${folder}/`;
               console.log(path);
               fs.mkdirSync(path);
               writeFile(path + vueFile, vueFileContent);
               writeFile(path + jsFile, jsFileContent);
               writeFile(path + styleFile, '');
               break;
         }

         lastPosition = index;
         lastFolder = folder
      });
   } else {
      console.log('Não possui');
      path = `pages/${pageName}/`;
      fs.mkdirSync(path);
      writeFile(path + vueFile, vueFileContent);
      writeFile(path + jsFile, jsFileContent);
      writeFile(path + styleFile, '');
   }

};

// TODO:
// module.exports.make = (amount) => {
//   value = entry('Digite a quantidade de pastas: ');
// console.log(value);
//   if (amount === 1) {
    
//   } else {
    
//   } 
// };
