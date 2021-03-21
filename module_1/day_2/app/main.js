

/**
 * @Task_1
 * Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary
 * representation of that number. You can guarantee that input is non-negative.
 * @Example:
 * The binary representation of 1234 is 10011010010, so the function should return 5 in this case
 */

function getBits(input) {
	const positiveDecimal = input < 0 ? Math.abs(input) : input;
	const binary = Number(positiveDecimal).toString(2);
	return binary.match(/1/g).length;
}
console.log(getBits(1234));

/**
 * @Task_2
 * Your task is to sort a given string. Each word in the string will contain a single number. This number is the position
 * the word should have in the result.
 * Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
 * If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
 * @Example:
 * "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
 * "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
 * ""  -->  ""
 */

function sortWords(input) {
	if (!input) {
		return '';
	}

	return input.split(' ').sort((a, b) => parseInt(a.match(/\d/)) - parseInt(b.match(/\d/))).join(' ');
}
console.log(sortWords('4of Fo1r pe6ople g3ood th5e the2'));

/**
 * @Task_3 Football Task:
 * Most football fans love it for the goals and excitement. You are to handle the referee's little notebook and count the players
 * who were sent off for fouls and misbehavior. The rules: Two teams, named "A" and "B" have 11 players each; players on each team
 * are numbered from 1 to 11. Any player may be sent off the field by being given a red card. A player can also receive a yellow
 * warning card, which is fine, but if he receives another yellow card, he is sent off immediately (no need for a red card in that case).
 * If one of the teams has less than 7 players remaining, the game is stopped immediately by the referee, and the team with less
 * than 7 players loses. A card is a string with the team's letter ('A' or 'B'), player's number, and card's color ('Y' or 'R') - all
 * concatenated and capitalized. e.g the card 'B7Y' means player #7 from team B received a yellow card.
 * The task: Given a list of cards (could be empty), return the number of remaining players on each team at the end of the game
 * (as a tuple of 2 integers, team "A" first). If the game was terminated by the referee for insufficient number of players, you
 * are to stop the game immediately, and ignore any further possible cards.
 * If a player that has already been sent off receives another card - ignore it.
 */

function manStillStanding(instructions) {
	if (!instructions || !instructions.length) {
		return [11, 11];
	}

	const teamA = new Array(11).fill(2);
	const teamB = [...teamA];

	for (let instruction of instructions) {
		const [_, team, player, cardColor] = instruction.match(/([AB])([\d]{1,2})([YR])/);
		const teamToPenalty = team === 'A' ? teamA : teamB;
		const playerIndex = player - 1;

		if (teamToPenalty[playerIndex] === 0) {
			// Ignore if already has been removed from game
			continue;
		} else if (teamToPenalty[playerIndex] === 1) {
			// Doesn't matter card color if player previously got penalty, just remove from game
			teamToPenalty[playerIndex] = 0;
		} else {
			// If it's first foul give accordingly penalty
			const penaltyPoints = cardColor === 'R' ? 2 : 1;
			teamToPenalty[playerIndex] -= penaltyPoints;
		}

		// Should we continue calculating or team already lose
		if (teamToPenalty.filter(Boolean).length < 7) {
			break;
		}
	}

	return [teamA.filter(Boolean).length, teamB.filter(Boolean).length];
}
console.log(manStillStanding(['A11R', 'A11R', 'A1R', 'A2R', 'A3R', 'A4R', 'A5R', 'B2R']));
