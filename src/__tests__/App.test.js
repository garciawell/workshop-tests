// import { render, screen } from '@testing-library/react';
// import App from '../App';

function sum(a,b) {
  if(typeof a !== "number") {
    throw new Error('You must provide a number.');
  }

  return a + b;
}


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


describe("sum", () => {

  it("should be able to sum values", () => {
    expect(sum(2,3)).toBe(5)
  })   

  
  
  it("should not be able to sum values if passing string", () => {
    expect(() => {
      sum("2",3)
    }).toThrow("You must provide a number.") 
  })

})