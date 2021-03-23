// Alternate methods

Array.prototype._pop = function() {
	const value = this[this.length - 1];
	delete this[this.length - 1];
	this.length--;
	return value;
};

Array.prototype._push = function(...args) {
	for (let arg of args) {
		this[this.length] = arg;
	}

	return this.length;
};

Array.prototype._shift = function() {
	const value = this[0];
	delete this[0];
	for (let i = 0; i < this.length - 1; i++) {
		this[i] = this[i + 1];
	}
	this.length--;
	return value;
};

Array.prototype._unshift = function(...args) {
	const len = args.length;
	this.length += len;

	for (let i = this.length - 1; i >= len; i--) {
		this[i] = this[i - len];
	}

	for (let j = 0; j < len; j++) {
		this[j] = args[j];
	}

	return this.length;
};

Array.prototype._concat = function(...items) {
	const concatenated = [];
	const initialLen = this.length;

	for (let i = 0; i < initialLen; i++) {
		concatenated[i] = this[i];
	}

	for (let item of items) {
		if (Array.isArray(item)) {
			for (let i = 0; i < item.length; i++) {
				concatenated[concatenated.length] = item[i];
			}
		} else {
			concatenated[concatenated.length] = item;
		}
	}

	return concatenated;
};

// Bonus
Array.prototype._reduce = function (cb, initial) {
	if (typeof cb !== 'function') {
		throw new Error('Ta Za Sho?');
	}

	let [acc, i] = initial === undefined ? [this[0], 1] : [initial, 0];

	for (; i < this.length; i++) {
		acc = cb.call(this, acc, this[i], i, this);
	}

	return acc;
};

// Reduce instead of built methods

console.log([1, 2, 3, 4]._reduce((prev, el) => prev += el));

// map
console.log(['Jabloko', 'Banan', 'Ananas']._reduce((prev, el) => {prev.push(el[0]); return prev;}, []));

// filter
console.log(['Jabloko', 'Banan', 'Ananas']._reduce((prev, el) => {el[0].toLowerCase() === 'j' && prev.push(el); return prev;}, []));

// forEach
const arr = ['Jabloko', 'Banan', 'Ananas'];
arr._reduce((_, el, i , arr) => {arr[i] = `${i + 1}: ${el};`}, 0);
console.log(arr);
