/**
 @Task_1:
 Tic-Tac-Toe Checker
 If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!
 Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:
 [[0, 0, 1],
 [0, 1, 2],
 [2, 1, 0]]
 We want our function to return:
 -1 if the board is not yet finished (there are empty spots),
 1 if "X" won,
 2 if "O" won,
 0 if it's a cat's game (i.e. a draw).
 You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.
 */

function ticTacChecker(board) {
  // test diagonals
  const winByFirstDiagonal = board[0][0] === board[1][1] && board[0][0] === board[2][2];
  const winBySecondDiagonal = board[0][2] === board[1][1] && board[0][0] === board[2][0];
  if (winByFirstDiagonal || winBySecondDiagonal) {
    return board[1][1];
  }

  for (let i = 0; i < 3; i++) {
    // test columns
    if (board[i].every(v => v === board[i][0])) {
      return board[i][0];
    }

    // test rows
    if (board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
      return board[0][i];
    }
  }

  return [...board[0], ...board[1], ...board[2]].includes(0) ? -1 : 0;
}

console.log(ticTacChecker(
  [[0, 0, 1],
    [0, 1, 2],
    [2, 1, 0]]
));

/**
 @Task_2:
 Mission: Hidden Message
 Story
 For many years, The Foundation has been encoding their messages in inconspicuous letters. Now, they are looking for a function that will solve the decoding of the messages for them.
 @Rules_of_decoding:
 You will receive a string containing several sentences (the “letter”).
 The length of each word of the first sentence signals the word we must take for each of the following sentences. So if the first sentence has two words of 3 and 7 letters in it, we should pick the third word of the second sentence, and the seventh of the third. We would then be done with the first sentence of the hidden message.
 If there is another sentence in our letter after we are done picking the words signaled by the first sentence, we’ll treat it as we did the first. In our example, if there was a fourth sentence, we would count the lengths of its words as we did with the first, and pick the words in those positions in the following sentences; that would give us the second sentence of the hidden message - and we would go on like that indefinitely.
 Dots, question and exclamation marks (.?!) are the valid delimiters of the end of a sentence.
 Punctuation marks (such as those above, commas, quotes, and apostrophes) don’t go into the word count.
 Punctuation marks, except apostrophes, don’t transfer into the decoded message (so apostrophes do).
 Words with apostrophes count as one word (I’m would count as a word of two letters).
 Expected Output
 Each sentence of the decoded hidden message must have its first word capitalised (the rest should be in lowercase) and end with a dot ..
 Any sentence after a dot must be preceded by a space.
 There should be no spaces at the beginning or the end of the decoded message.
 For an empty string, return a empty string.
 @Example
 'Yesterday, we bumped into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse. The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first.'
 Should return:
 'The mission has been done.'
 */

function decoder(code) {
  if (!code) {
    return '';
  }

  const groups = code.toLowerCase().split(/[\.\!\?]\s/).reduce((acc, el, i, arr) => {
    acc.push(arr.splice(0, arr[0].split(' ').length + 1));
    return acc;
  }, []);

  let decoded = '';
  for (let group of groups) {
    const [positions, sentences] = [
      group[0].replace(/[\,\'\"]/g, '').split(' ').map(word => word.length),
      group.splice(1, group.length -1)
    ];

    const decodedSentence = sentences.reduce((acc, el, i) => {
      return `${acc} ${el.replace(/[\,\"]/g, '').split(' ')[positions[i] - 1]}`;
    }, '').trim();
    decoded = `${decoded}${decodedSentence[0].toUpperCase()}${decodedSentence.slice(1)}. `;
  }

  return decoded;
}


console.log(decoder(
  `Yesterday, we bumped into Laura. It had to happen, but you can't deny the timing couldn't be worse. The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn't been a pleasurable experience to go through it. I wanted to feel done with it first. I'm try. This Super Mario game is amazing. It was good time!`
));
