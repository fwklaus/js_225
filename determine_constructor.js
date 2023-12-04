let newObj = {};

// console.log(newObj.constructor)
// console.log(Object.hasOwnProperty('constructor'));

function whereIsConstructor(obj) {
  while(obj) {
    if (obj.hasOwnProperty('constructor')) return obj;
    obj = Object.getPrototypeOf(obj);
  }

  return null;
}

console.log(whereIsConstructor(newObj).constructor === Object.prototype.constructor);
