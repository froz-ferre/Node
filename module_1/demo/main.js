import ChessDesk from './src/task1.js';
import Envelops from './src/task2.js';
import Triangles from './src/task3.js';
import Palindrome from './src/task4.js';
import Tickets from './src/task5.js';
import Sequence from './src/task6.js';
import Fibonacci from './src/task7.js';


const desk = new ChessDesk();
// console.log(desk.build(5,7,'Xoxo'));

const envelops = new Envelops();
// console.log(envelops.check({a: 10, b: 20}, {c: 5, d: 10}));

const triangles = new Triangles();
// console.log(triangles.sort([{vertices: 'ABC', a: 10, b: 7, c: 5}, {vertices: 'BCD', b: 8, c: 4, d: 5}]));

const palindrome = new Palindrome();
// console.log(palindrome.test(1234500));

const tickets = new Tickets();
console.log(tickets.test({min: 0, max: 999999}));
console.log(tickets.test({min: 1, max: 1}));
console.log(tickets.test({min: 1, max: 132}));
console.log(tickets.test({min: 1000, max: 2000}));

const sequence = new Sequence();
// console.log(sequence.get(7, 100));

const fibonacci = new Fibonacci();
// console.log(fibonacci.get({length: 10}));
// console.log(fibonacci.get({min: 100, max: 10000}));

