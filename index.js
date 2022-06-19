const fs = require('fs');
const newPageDir = "pages/test.vue";

module.exports.hello = () => {
  console.log('Just a test.');
};

module.exports.makePage = () => {
  if (!fs.existsSync(newPageDir)){
    //Efetua a criação do diretório
    fs.mkdirSync(newPageDir);
   }
};
