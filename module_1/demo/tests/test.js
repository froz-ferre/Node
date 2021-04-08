import ChessDesk from '../src/task1.js';
import Envelops from '../src/task2.js';
import Triangles from '../src/task3.js';
import Palindrome from '../src/task4.js';
import Tickets from '../src/task5.js';
import Sequence from '../src/task6.js';
import Fibonacci from '../src/task7.js';

mocha.setup('bdd');

const assert = chai.assert;


describe('Task1', () => {
  const desk = new ChessDesk();

  it('Should create class', () => {
    assert.equal(typeof desk, 'object');
  });

  describe('Call with wrong arguments', () => {
    const error = {status: 'fail', reason: ''};

    it('should return error object when provide arguments as null', () => {
      assert.equal(typeof desk.build(null, null, null), 'object');
    });

    it('should return two reasons when provided only height as null', () => {
      assert.deepEqual(desk.build(null), {...error, reason: 'Width and height should be integers!\nHeight should be from 2 to 256. null isn\'t correct value\n'});
    });

    it('should return minimal default desk when doesn\'t provide arguments', () => {
      assert.equal(desk.build(), '* \n * \n');
    });

    it('should return desk when provided height, length and symbol', () => {
      assert.equal(desk.build(3, 3, 'X'), 'X X\n X\nX X\n');
    });

  });
});

describe('Task2', () => {
  const envelops = new Envelops();

  it('Should create class', () => {
    assert.equal(typeof envelops, 'object');
  });
});

describe('Task3', () => {
  const triangles = new Triangles();

  it('Should create class', () => {
    assert.equal(typeof triangles, 'object');
  });
});

describe('Task4', () => {
  const palindrome = new Palindrome();

  it('Should create class', () => {
    assert.equal(typeof palindrome, 'object');
  });
});

describe('Task5', () => {
  const tickets = new Tickets();

  it('Should create class', () => {
    assert.equal(typeof tickets, 'object');
  });
});

describe('Task6', () => {
  const sequence = new Sequence();

  it('Should create class', () => {
    assert.equal(typeof sequence, 'object');
  });
});

describe('Task7', () => {
  const fibonacci = new Fibonacci();

  it('Should create class', () => {
    assert.equal(typeof fibonacci, 'object');
  });
});

//START
mocha.run();
