
module.exports = function isBalanced(s) {
	const map = {
		'(': ')',
		'[': ']',
		'{': '}',
	};
	const closing = Object.values(map);
	const stack = [];

	for (let char of s) {
		if (map[char]) {
			stack.push(char);
		} else if (closing.includes(char) && char !== map[stack.pop()]) {
			return false;
		}
	}
	return !stack.length;
}
