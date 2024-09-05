const {divide} = require("./divide.js");

test('divide', () => {
  const result = divide(2, 0);
  const expected = "you can't divide by 0";
  expect(result).toBe(expected)
})