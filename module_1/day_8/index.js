function battleShips(board, attacks) {

  // locate ships
  const boardLen = board.length;
  const boardHeight = board[0].length;

  const boatsCoords = {};

  for (let i = 0; i < boardLen; i++) {
    for (let j = 0; j < boardHeight; j++) {
      const ship = board[i][j];
      if (!ship) {continue;}

      if (!boatsCoords[ship]) {boatsCoords[ship] = [];}

      boatsCoords[ship].push([j + 1, boardLen - i]);
    }
  }

  // Calculate results
  const result = {
    sunk: 0,
    damaged: 0,
    notTouched: 0
  };

  for (let key in boatsCoords) {
    const boat = boatsCoords[key];
    const touches = boat.filter(coord => attacks.find(a => a[0] === coord[0] && a[1] === coord[1])).length;
    switch (touches) {
      case 0: result.notTouched++; break;
      case boat.length: result.sunk++; break;
      default: result.damaged++; break;
    }
  }

  result.points = result.sunk + (result.damaged/2) - result.notTouched;
}

board = [        // i -> y
  [0,0,0,2,2,0], // 0 -> 4
  [0,3,0,0,0,0], // 1 -> 3
  [0,3,0,1,0,0], // 2 -> 2
  [0,3,0,1,0,0]  // 3 -> 1
];
attacks = [[2, 1], [2, 2], [2, 3]];
battleShips(board, attacks);
