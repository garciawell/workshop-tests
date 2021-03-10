export function sum(a,b) {
    if(typeof a !== "number") {
      throw new Error('You must provide a number.');
    }
  
    return a + b;
  }

  export const capitalizeString = (s) => {
    if (typeof s !== 'string') return '';
    return s.replace(/\b\w/g, (l) => l.toUpperCase());
  };

