const Build = require('@oseiasfreitas/front-builder');
const entry = require('prompt-sync')({sigint: true});
let value= null;
let main = null;
let type = null;

value = entry('Enter the directory hierarchy: ');
console.log('Hierarchy: ' + value);

main = entry('Enter the directory main folder: ');
console.log('Main folder: ' + main);

type = entry('Write js to javascript or ts to typescript (js/ts): ');
console.log('Type picked: ' + type);

if (type === 'js') {
 Build.jsMakePage(value, main);
} else if (type === 'ts') {
 Build.tsMakePage(value, main);
} else {
  console.log('Chose a correct type, please..');
  type = entry('Write js to javascript or ts to typescript (js/ts): ');
  console.log('Type picked: ' + type);
}
