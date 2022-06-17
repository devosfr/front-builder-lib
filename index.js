const fs = require('fs');
const dir = "src/test.vue";

module.exports.hello = () => {
  if (!fs.existsSync(dir)){
    //Efetua a criação do diretório
    fs.mkdirSync(dir);
   }
  console.log('Just a test.');
};
