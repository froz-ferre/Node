class CustomString {

	value;

	constructor(str) {
		this.value = '' + str;
	}

	concat(...args) {
		let result = this.value;
		for (let word of args) {
			result += word;
		}

		return result;
	}

	lastIndexOf(searchValue, fromIndex = 0) {
		const search = '' + searchValue;
		if (!this.value || !search) {
			return -1;
		}

		for (let i = this.value.length - searchValue.length; i >= fromIndex; i--) {
			if (this.value[i] !== search[0]) {
				continue;
			}

			for (let j = 0; j < search.length; j++) {
				if (search[j] !== this.value[i + j]) {
					break;
				}

				if (j === search.length - 1) {
					return i;
				}
			}
		}

		return -1;
	}

	includes(search, fromIndex = 0) {
		if (search === '') {
			return true;
		}

		if (!this.value) {
			return false;
		}

		return this.lastIndexOf(search, fromIndex) !== -1
	}

	repeat(count) {
		if (!count || count < 0 || count === Infinity) {
			return '';
		}

		let result = '';
		while (count > 0) {
			result += this.value;
			--count;
		}

		return result;
	}

	substr(startIndex, length) {
		if (typeof startIndex !== 'number') {
			throw new Error('Index should be a number');
		}

		if (!this.value) {
			return '';
		}

		if (typeof length === 'number' && length <= 0) {
			return '';
		}

		let index = startIndex < 0 ? this.value.length + startIndex : startIndex;
		let end = length ? length : this.value.length;
		let result = '';

		while (index < end) {
			if (index === this.value.length) {
				break;
			}

			result += this.value[index];
			index++;
		}

		return result;
	}

	substring(startIndex, endIndex) {
		if (startIndex === undefined) {
			throw new Error('Should be number')
		}

		if (typeof startIndex !== 'number') {
			throw new Error('Should be number');
		}

		let start, end;
		if (startIndex > endIndex) {
			start = endIndex;
			end = startIndex;
		} else {
			start = startIndex;
			end = endIndex;
		}

		if (startIndex < 0) {
			start = 0;
		}

		if (endIndex === undefined) {
			end = this.value.length;
		}

		let result = '';
		for (let i = start; i < end; i++) {
			result += this.value[i];
		}

		return result;
	}
}
