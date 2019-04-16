function add(a, b) {
   return a+b;
}

function subtract(a,b) {
  return a-b
}

function multiply(a,b) {
  return a*b
}

function divide(a,b) {
  return a/b
}

function inc(a) {
  return a+1
}

function dec(a) {
  return a-1
}


function makeInt(a) {
  this.a = a;
}

var makeInt1 = new makeInt('a');

makeInt.prototype.toString = function makeIntToString() {
  return '' + this.a;
}
