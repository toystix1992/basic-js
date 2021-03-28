const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
	let rightArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i-1] !== '--discard-next') rightArr.push(arr[i]);
		switch (arr[i]) {
			case '--discard-next':
				rightArr.pop();
			break;
			case '--discard-prev':
				rightArr.pop();
			if (arr[i-1] !== undefined && arr[i-2] !== '--discard-next') {
				rightArr.pop();
			}
			break;
			case '--double-next':
				rightArr.pop();
			if (arr[i+1] !== undefined) {
				rightArr.push(arr[i+1]);
			}
			break;
			case '--double-prev':
				rightArr.pop();
			if (arr[i-1] !== undefined && arr[i-2] !== '--discard-next') {
				rightArr.push(arr[i-1]);
			}
		}
	}
	return rightArr;
};
