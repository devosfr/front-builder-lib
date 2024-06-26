const fs = require('fs');
const {
   join
} = require('node:path');
const vueFileContentHtmlBody = require('./templates/js/html.json');
const vueFileContentJsBody = require('./templates/js/js.json');
console.log('TEST: ', JSON.stringify(vueFileContentHtmlBody.body));
// debugger;
const {
   writeFile
} = require('fs/promises');
const newPageDir = "pages/test.vue";
const entry = require('prompt-sync')({
   sigint: true
});
let vueFile = 'index.vue';
// js
let vueFileContent = vueFileContentHtmlBody.body;
let jsFile = 'script.js';
let jsFileContent = vueFileContentJsBody.body;

// ts
let tsVueFileContentWithScript = '<script setup lang="ts">\n</script>\n<template>\n\t<h1>Just a simple text</h1>\n</template>\n<style scoped type="text/css" src="./style.css" />';
let tsVueFileContent = '<template>\n\t<h1>Just a simple text</h1>\n</template>\n\n<script lang="ts" src="./script.ts" />\n<style scoped type="text/css" src="./style.css" />';
let tsFile = 'script.ts';
let tsFileContent = "import { defineComponent } from 'vue';\n\n export default defineComponent({})";

let styleFile = 'style.css';
let value;

module.exports.jsMakePage = (pageName, mainPage) => {
   var path;
   var lastPosition;
   var lastFolder;
   // var count;
   console.log(mainPage);
   if (mainPage !== 'pages' && mainPage !== 'components') {
      console.log('Invalid main folder name, please write pages or components to be the main page.');
      return null
   }

   // When have more than one folder
   if (pageName.indexOf('/') > -1) {
      var folders = pageName.split('/');
      count = folders.length;
      folders.forEach((folder, index) => {
         switch (true) {
            case index > lastPosition:
               // console.log('TESTE 1');
               path = join(`${mainPage}/${lastFolder}/${folder}/`);
               fs.mkdirSync(path);
               writeFile(path + vueFile, vueFileContent);
               writeFile(path + jsFile, jsFileContent);
               writeFile(path + styleFile, '');
               break;

            default:
               // Está caindo aqui
               // console.log('TESTE 2');
               path = join(`${mainPage}/${folder}/`);
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
      path = join(`${mainPage}/${pageName}/`);
      fs.mkdirSync(path);
      writeFile(path + vueFile, vueFileContent);
      writeFile(path + jsFile, jsFileContent);
      writeFile(path + styleFile, '');
   }

};

module.exports.tsMakePage = (pageName, mainPage, sameFile) => {

   const _tsVueFileContent = sameFile === '1' ? tsVueFileContentWithScript : tsVueFileContent;

   var path;
   var lastPosition;
   var lastFolder;
   var count;
   console.log(mainPage);
   if (mainPage !== 'pages' && mainPage !== 'components') {
      console.log('Invalid main folder name, please write pages or components to be the main page.');
      return null
   }

   // When have more than one folder
   if (pageName.indexOf('/') > -1) {
      var folders = pageName.split('/');
      count = folders.length;
      folders.forEach((folder, index) => {
         switch (true) {
            case index > lastPosition:
               // console.log('TESTE 1');
               path = join(`${mainPage}/${lastFolder}/${folder}/`);
               fs.mkdirSync(path);
               // mark
               writeFile(path + vueFile, _tsVueFileContent);
               (sameFile === '2') && (writeFile(path + tsFile, tsFileContent));
               writeFile(path + styleFile, '');
               break;

            default:

               path = join(`${mainPage}/${folder}/`);
               fs.mkdirSync(path);
               writeFile(path + vueFile, _tsVueFileContent);
               (sameFile === '2') && (writeFile(path + tsFile, tsFileContent));
               writeFile(path + styleFile, '');
               break;
         }

         lastPosition = index;
         lastFolder = folder
      });
   } else {
      path = join(`${mainPage}/${pageName}/`);
      fs.mkdirSync(path);
      writeFile(path + vueFile, _tsVueFileContent);
      (sameFile === '2') && (writeFile(path + tsFile, tsFileContent));
      writeFile(path + styleFile, '');
   }
};

module.exports.makeByComponent = ({
   pageName,
   mainPage,
   componentChoice
}) => {
   var path;
   var lastPosition;
   var lastFolder;
   // var count;
   console.log(mainPage);
   if (mainPage !== 'pages' && mainPage !== 'components') {
      console.log('Invalid main folder name, please write pages or components to be the main page.');
      return null
   }

   // When have more than one folder
   if (pageName.indexOf('/') > -1) {
      console.log('TEST X', componentChoice);
      // var folders = pageName.split('/');
      // count = folders.length;
      // folders.forEach((folder, index) => {
      //    switch (true) {
      //       case index > lastPosition:
      //          // console.log('TESTE 1');
      //          path = join(`${mainPage}/${lastFolder}/${folder}/`);
      //          fs.mkdirSync(path);
      //          writeFile(path + vueFile, vueFileContent);
      //          writeFile(path + jsFile, jsFileContent);
      //          writeFile(path + styleFile, '');
      //          break;

      //       default:
      //          // Está caindo aqui
      //          // console.log('TESTE 2');
      //          path = join(`${mainPage}/${folder}/`);
      //          fs.mkdirSync(path);
      //          writeFile(path + vueFile, vueFileContent);
      //          writeFile(path + jsFile, jsFileContent);
      //          writeFile(path + styleFile, '');
      //          break;
      //    }

      //    lastPosition = index;
      //    lastFolder = folder
      // });
   } else {
      console.log('TEST XX', componentChoice);

      path = join(`${mainPage}/${pageName}/`);
      fs.mkdirSync(path);
      writeFile(path + vueFile, componentChoice.content);
      // writeFile(path + vueFile, vueFileContent);
      writeFile(path + jsFile, jsFileContent);
      writeFile(path + styleFile, '');
   }

};