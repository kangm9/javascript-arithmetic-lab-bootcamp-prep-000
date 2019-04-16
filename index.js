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
  var parsed = parseInt(a);
  if (isNaN(parsed)) { return true }
  return a;
}

function preserveDecimal(a) {
  return parseFloat(a) * 2.0 * Math.PI;
}
