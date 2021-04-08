import Validator from './validator.js';


export default class Fibonacci {

  get(context) {
    const invalid = Validator.validateFibonacci(context);
    if (invalid) {
      return invalid;
    }

    const hasMinMax = context.hasOwnProperty('min');
    return hasMinMax ? this._fib(1000000, context.min, context.max) : this._fib(context.length);
  }

  _fib(length = 1000000, min = 1, max = 1000000) {
    let a = 1;
    let b = 1;
    const set = min > 1 ? [] : [a, b];
    for (let i = 3; i <= length; i++) {
      let c = a + b;
      a = b;
      b = c;

      if (c >= min && c <= max) {
        set.push(c);
      }
    }
    return set;
  }
}
