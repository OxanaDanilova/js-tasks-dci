const iDoSomething = function (str) {
  //something
  return "something";
};

const iDoSomethingEs6 = (str) => "Something";

console.log(iDoSomethingEs6());

const trueOderFalse = (x, y) => x > y;

console.log(trueOderFalse(3, 6));

///////////Callback - ich rufe jemand anderes um eine Aufgabe zu tun, ich warte, wenn diese Funktion seine Ergebniss schickt zurück
function iDoCaffe() {
  let milk = iHaveMilk();
  let sweetener = iHaveSweetener();
  let spoon = iHaveSpoon();
  let eis = iHaveEis();
  return `Your coffee with ${milk} and ${sweetener} and ${eis} and ${spoon} is ready.`;
}

const iHaveMilk = () => "milk";
const iHaveSweetener = () => "sweetener";
const iHaveSpoon = () => "spoon";
const iHaveEis = () => "eis";

console.log(iDoCaffe());

///---------------- Array method map ES6

///Map: callback-funktion, Schleife, kopie von original Array
const names = ["Ali", "Nancy", "Olga", "Steel"];
const greetingArr = names.map((name, i) => `Hey ${name} with ${i} index`);
// console.log(greetingArr);
