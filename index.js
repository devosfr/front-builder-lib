const fs = require('fs');
const newPageDir = "pages/test.vue";

module.exports.hello = () => {
  console.log('Just a test.');
};

module.exports.makePage = (pageName) => {
   fs.mkdirSync(`pages/${pageName}`);
};
