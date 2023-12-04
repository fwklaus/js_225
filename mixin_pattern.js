// Object.assign 

function extend(destination) {
  for (let i = 1; i < arguments.length; i++) {
    let source = arguments[i];
    for (let prop in source) {
      if (Object.prototype.hasOwnProperty.call(source, prop)) {
        destination[prop] = source[prop];
      }
    }
  }

  return destination;
}
