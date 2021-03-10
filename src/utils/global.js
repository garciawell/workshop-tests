export function sum(a,b) {
    if(typeof a !== "number") {
      throw new Error('You must provide a number.');
    }
  
    return a + b;
  }