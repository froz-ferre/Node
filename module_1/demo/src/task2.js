import Validator from './validator.js';


export default class Envelops {

  check(envelope1, envelope2) {
    const invalid = Validator.validateEnvelops(envelope1, envelope2);
    if (invalid) {
      return invalid;
    }

    const keys1 = Object.keys(envelope1);
    const keys2 = Object.keys(envelope2);

    if (envelope1[keys1[0]] > envelope2[keys2[0]] && envelope1[keys1[1]] > envelope2[keys2[1]]) {
      return 1;
    }

    if (envelope1[keys1[0]] < envelope2[keys2[0]] && envelope1[keys1[1]] < envelope2[keys2[1]]) {
      return 2;
    }

    return 0;
  }
}
