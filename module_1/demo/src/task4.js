import Validator from './validator.js';


export default class Palindrome {

  test(input) {
    const invalid = Validator.validatePalindrome(input);
    if (invalid) {
      return invalid;
    }

    const results = [];
    const asString = input.toString().replace('-', '');
    for (let i = 0; i < asString.length; i++) {
      if (asString[i] === asString[i + 1]) {
        let left = i - 1;
        let right = i + 2;
        while (left >= 0 && right <= asString.length) {

          if (asString[left] !== asString[right]) {
            break;
          }

          left--;
          right++;
        }

        results.push({from: left + 1, to: right});
      }
    }

    return results.map(v => +asString.substring(v.from, v.to)).sort((a, b) => b - a)[0] || 0;
  }
}
