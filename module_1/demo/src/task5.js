import Validator from './validator.js';


export default class Tickets {

  test(context) {
    const error = Validator.validateTickets(context);
    if (error) {
      return error;
    }

    const [easy, hard] = [[], []];
    for (let i = +context.min; i <= +context.max; i++) {
      let ticket = i.toString().length < 6 ? '0'.repeat(6 - i.toString().length) + i : i.toString();

      if (this._testEasy(ticket)) {
        easy.push(ticket);
      }

      if (this._testHard(ticket)) {
        hard.push(ticket);
      }
    }

    const easyLen = easy.length;
    const hardLen = hard.length;
    if (easyLen === hardLen) {
      return {winner: 'Both', easyCount: easyLen, hardCount: hardLen};
    }

    return {
      winner: easyLen > hardLen ? 'Easy method' : 'Hard method',
      easyCount: easyLen,
      hardCount: hardLen
    }
  }

  _testEasy(t) {
    const left = [...t].splice(0, 3).reduce((prev, el) => prev += +el, 0);
    const right = [...t].splice(3, 3).reduce((prev, el) => prev += +el, 0);
    return left === right;
  }

  _testHard(t) {
    const odd = [...t].reduce((prev, el) => prev += +el % 2 !== 0 ? +el : 0, 0);
    const even = [...t].reduce((prev, el) => prev += +el % 2 === 0 ? +el : 0, 0);
    return odd === even;
  }
}
