import Validator from '../Validator.js';

const sortObj = {};
const forSort = [];
const result = [];

test('Validate', () => {
  expect(Validate(sortObj, forSort)).toEqual(result);
});
