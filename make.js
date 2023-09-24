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
  Build.tsMakePage(value, main);
} else {
  console.log('Chose a correct type, please..');
  type = entry('Write js to javascript or ts to typescript (js/ts): ');
  console.log('Type picked: ' + type);
}