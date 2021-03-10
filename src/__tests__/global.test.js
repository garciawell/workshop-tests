import { sum } from "../utils/global"

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