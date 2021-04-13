import Validator from './validator.js';


export default class Sequence {

  get(length, square) {
    const invalid = Validator.validateSequence(length, square);
    if (invalid) {
      return invalid;
    }

    const result = [];
    let i = Math.floor(Math.sqrt(square));
    while (result.length < length) {
      if (i**2 >= square) {
        result.push(i);
      }
      i++;
    }

    return result.join(', ');
  }
}
