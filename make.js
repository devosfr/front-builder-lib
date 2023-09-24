const Build = require('@oseiasdev/front-builder');
const entry = require('prompt-sync')({
  sigint: true
});
let value = null;
let main = null;
let type = null;

value = entry('Git a name to the folder: ');
console.log('Hierarchy: ' + value);

main = entry('Where do you want to create? (for example pages, components...): ');
console.log('Main folder: ' + main);

type = entry('Write js to javascript or ts to typescript (js/ts): ');
console.log('Type picked: ' + type);

if (type === 'js') {
  Build.jsMakePage(value, main);
} else if (type === 'ts') {

  // TODO: Chose 1 to typscript and html in the same file or 2 to use in separate files
  const sameFile = entry('Chose 1 to typscript and html in the same file or 2 to use in separate files: ');
  console.log('Chosed: ' + sameFile);

  switch (true) {
    case sameFile === '1' || sameFile === '2':
      Build.tsMakePage(value, main, sameFile);
      break;
    default:
      console.log('Please, insert 1 or 2 value');
      break;
  }

} else {
  console.log('Chose a correct type, please..');
  type = entry('Write js to javascript or ts to typescript (js/ts): ');
  console.log('Type picked: ' + type);
}