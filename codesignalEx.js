function sorted(checkArr) {
	let arr = checkArr.slice(0);
	let nochange = false;
	let valueHolder;
	let j = 0;
	while (!nochange == true) {
		nochange = true;
		for (let i = 0; i < arr.length; i++) {
			if (arr[j] <= arr[i]) {
				nochange = false;
				valueHolder = arr[i];
				arr[i] = arr[j];
				arr[j] = valueHolder;
			}
		}
		j++;
	}

	return arr;
}

function checkForRepeats(elem, Originalarr) {
	let arr = Originalarr.slice(0);
	let k = arr.indexOf(elem);
	let count = 0;
	let freqArr = [];
	while (k >= 0) {
		count++;
		arr.splice(k, 1);
		k = arr.indexOf(elem, k);
	}
	if (count > 1) {
		freqArr.push(elem);
		freqArr.push(count);
		//console.log(freqArr);
		return freqArr;
	}
}

function removeDubls(oldArr) {
	let arr = [];
	for (let i = 0; i < oldArr.length; i++) {
		if (oldArr[i]) {
			arr.push(oldArr[i]);
		}
	}
	//console.log(arr);
	if (arr.length > 1) {
		for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j < arr.length; j++) {
				if (arr[i][0] === arr[j][0] && i !== j) {
					arr.splice(j, 1);
				}
			}
		}

		if (arr.length > 1) {
			return false;
		} else if (arr.length === 1) {
			if (arr[0][1] > 2) {
				return false;
			} else {
				return true;
			}
		}
	} else {
		return true;
	}
}
/*սկզբնական մասսիվը կրկնորինակ եմ անում ու շարում եմ աճման կարգով, 
հետո, սկզբնական մասսիվից հատ-հատ i էլեմենտը ջնջում եմ, ու էտ նույն էլեմենտը ջնջում եմ էն կրկնօրինակի մեջ, 
ու դարձնում եմ երկուսնել string ու համեմատում
*/
function finalcheck(sequence) {
	let arr = sequence.slice(0);
	let tempHolder = sorted(sequence.slice(0));
	let tempArr = arr.slice(0);
	tempArr = sorted(tempArr);
	let length = arr.length;

	for (let i = 0; i < length; i++) {
		tempArr = tempHolder.slice(0);
		arr = sequence.slice(0);
		let k = tempArr.indexOf(arr[i]);
		arr.splice(i, 1);
		tempArr.splice(k, 1);

		if (arr.toString() === tempArr.toString()) {
			return true;
		}
	}
	return false;
}
/*
let someArr = [ 1, 1, 1, 5, 6, 7, 8 ];
let freqArr = [];
for (let i = 0; i < someArr.length; i++) {
	freqArr.push(checkForRepeats(someArr[i], someArr));
}

let someIndicator = removeDubls(freqArr);
//console.log(someIndicator);
if (someIndicator) {
	let final = finalcheck(someArr);
	console.log(`after removing one element  it will become stricly ascending:  ${final}`);
} else {
	console.log(`after removing one element  it will become stricly ascending:  ${someIndicator}`);
}
*/
function tripletSum(x, a) {
	let sum = 0;
	let tempArr = [];
	for (let i = 0; i < a.length; i++) {
		if (a[i] <= x) {
			for (let j = 0; j < a.length; j++) {
				if (i !== j) {
					sum = a[i] + a[j];
					debugger;
					if (sum < x) {
						tempArr = a.slice(0);
						tempArr.splice(i, 1);
						tempArr.splice(tempArr.indexOf(a[j]), 1);
						if (tempArr.indexOf(x - sum) !== -1) {
							return true;
						}
					}
				}
			}
		}
	}
	return false;
}

function sumOfTwo(a, b, v) {
	if (a.length) {
		for (let i = 0; i < a.length; i++) {
			if (b.indexOf(v - a[i]) !== -1) {
				return true;
			}
		}
		return false;
	} else {
		return false;
	}
}
//let names = [ 1, 5, 2, 1, 1, 1, 1, 2, 5, 5, 26, 6, 9, 2, 4, 1, 2 ];
//let uniq = [ ...new Set(names) ];
//console.log(uniq);

function persistence(newnum) {
	let num = String(newnum);
	let prod = 1;
	let count = 0;
	for (; num / 10 > 1; ) {
		for (let i = 0; i < num.length; i++) {
			prod *= num[i];
		}
		debugger;
		count++;
		num = String(prod);
		prod = 1;
	}
	return count;
}

function validatePIN(pin) {
	if (+pin === Math.abs(+pin) && (pin.length === 4 || pin.length === 6)) {
		let count = 0;
		for (let i = 0; i < pin.length; i++) {
			if (Number.isInteger(+pin[i]) && pin[i] !== ' ' && pin[i] !== '' && pin[i] !== '\n') {
				count++;
			}
		}
		if (count === 4 || count === 6) {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}

function digital_root(n) {
	let num = String(n);
	let sum = 0;

	for (; num / 10 > 1; ) {
		for (let i = 0; i < num.length; i++) {
			sum += +num[i];
		}
		num = String(sum);
		sum = 0;
	}
	return +num;
}

// shat lavner es meky, petqa jnjel n-ic avel krknutyunery bolor elementneri
function deleteNth(arr, n) {
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		count = 0;
		for (let j = 0; j < arr.length; j++) {
			if (arr[i] === arr[j]) {
				count++;
				if (count > n) {
					arr.splice(arr.lastIndexOf(arr[j]), 1);
					j--;
				}
			}
		}
	}
	return arr;
}
// esel er lavy :)
function digPow(num, p) {
	let k;
	let n = num;
	let newRow = [];
	for (; n > 0; ) {
		k = n % 10;
		n = (n - k) / 10;
		newRow.unshift(k);
	}
	//console.log(newRow);
	let sum = 0;
	for (let i = 0; i < newRow.length; i++) {
		sum += Math.pow(newRow[i], p + i);
	}
	if (Number.isInteger(sum / num)) {
		return sum / num;
	} else {
		return -1;
	}
}

// find the one odd in array of evens,and vice versa
function findOutlier(integers) {
	let i = 0;
	if (Math.abs(integers[i] % 2) + Math.abs(integers[i + 1] % 2) + Math.abs(integers[i + 2] % 2) < 2) {
		for (let i = 0; i < integers.length; i++) {
			if (integers[i] % 2 !== 0) {
				return integers[i];
			}
		}
	} else {
		for (let i = 0; i < integers.length; i++) {
			if (integers[i] % 2 === 0) {
				return integers[i];
			}
		}
	}
}

// triBonacci

function tribonacci(signature, n) {
	let triBonacci = [];
	if (n == 0) {
		return triBonacci;
	}
	for (let i = 0; i < n; i++) {
		if (signature[i] != undefined) {
			triBonacci.push(signature[i]);
		} else {
			triBonacci.push(triBonacci[i - 1] + triBonacci[i - 2] + triBonacci[i - 3]);
		}
	}
	return triBonacci;
}

//number in expanded form

function expandedForm(num) {
	let k;
	let arr = [];
	for (; num > 0; ) {
		k = num % 10;
		num = (num - k) / 10;
		arr.unshift(k);
	}

	let newArr = [];
	for (let i = arr.length - 1; i >= 0; i--) {
		if (arr[arr.length - 1 - i] === 0) {
			continue;
		}
		newArr.push(arr[arr.length - 1 - i] * 10 ** i);
	}
	let str;
	str = newArr.join(' + ');

	return str;
}

//#region  Hashtag gener for string
function generateHashtag(str) {
	let modifiedStr = '';
	if (!!str) {
		for (let i = 0; i < str.length; i++) {
			if (str[i] !== ' ') {
				if (i > 0 && str[i - 1] === ' ') {
					modifiedStr += str[i].toUpperCase();
					continue;
				} else if (i === 0) {
					modifiedStr += str[i].toUpperCase();
					continue;
				} else {
					modifiedStr += str[i];
					console.log(modifiedStr);
				}
			}
		}
	} else {
		return false;
	}
	let finalStr = '#';
	if (modifiedStr.length < 140 && +modifiedStr !== 0) {
		finalStr += modifiedStr;

		return finalStr;
	} else {
		return false;
	}
}
//#endregion

// password validator
function validate(password) {}

function sorted(checkArr) {
	let arr = checkArr.slice(0);
	let nochange = false;
	let valueHolder;
	let j = 0;
	while (!nochange == true) {
		nochange = true;
		for (let i = 0; i < arr.length; i++) {
			if (arr[j] <= arr[i]) {
				nochange = false;
				valueHolder = arr[i];
				arr[i] = arr[j];
				arr[j] = valueHolder;
			}
		}
		j++;
	}

	return arr;
}

function almostIncreasingSequence(sequence) {
	let countEqual = 0;
	let anotherEqual = 0;
	let checkArr = sequence.slice(0);
	for (let i = 0; i < checkArr.length; i++) {
		countEqual = 0;

		for (let j = 0; j < checkArr.length; j++) {
			if (i !== j && checkArr[i] === checkArr[j]) {
				countEqual++;
				anotherEqual++;
			}
			if (countEqual > 1) {
				return false;
			}
			if (anotherEqual > 1) {
				return false;
			}
		}
	}
	if (countEqual <= 1) {
		for (let i = 0; i < checkArr.length; i++) {
			if (checkWithItsSortedDuplicate(checkArr[i], checkArr) === true) {
				return true;
			}
		}
		return false;
	}
}

function checkWithItsSortedDuplicate(element, arr) {
	let tempHolder = sorted(arr.slice(0));
	let tempOriginal = arr.slice(0);
	let i = tempOriginal.indexOf(element);
	let k = tempHolder.indexOf(element);

	tempOriginal.splice(i, 1);
	tempHolder.splice(k, 1);

	if (tempOriginal.toString() === tempHolder.toString()) {
		return true;
	} else {
		return false;
	}
}

// lianna solution
function almostIncreasingSequence(sequence) {
	let resultArray;
	let generalResult = false;
	for (let i = 0; i < sequence.length; i++) {
		let result = true;

		resultArray = sequence.slice(0);
		resultArray.splice(i, 1);
		for (let j = 0; j < resultArray.length; j++) {
			if (resultArray[j + 1]) {
				if (resultArray[j] >= resultArray[j + 1]) {
					result = false;
					break;
				}
			}
		}

		if (result === true) {
			generalResult = result;
			break;
		}
	}
	return generalResult;
}
//codesignal 8
function matrixElementsSum(matrix) {
	let sum = 0;
	for (let j = 0; j < matrix[0].length; j++) {
		for (let i = 0; i < matrix.length; i++) {
			if (matrix[i][j] === 0) {
				break;
			} else {
				sum += matrix[i][j];
			}
		}
	}
	return sum;
}
//codesignal 9
function allLongestStrings(inputArray) {
	let newArr = [];
	let max = 0;
	for (let i = 0; i < inputArray.length; i++) {
		if (inputArray[i].length > max) {
			max = inputArray[i].length;
		}
	}
	for (let i = 0; i < inputArray.length; i++) {
		if (inputArray[i].length === max) {
			newArr.push(inputArray[i]);
		}
	}
	return newArr;
}
// codesignal 10

function commonCharacterCount(s1, s2) {
	let count = 0;
	let s1Arr = s1.split('');
	let s2Arr = s2.split('');

	for (let i = 0; i < s1Arr.length; i++) {
		if (s2Arr.indexOf(s1Arr[i]) >= 0) {
			count++;
			let k = s2Arr.indexOf(s1Arr[i]);

			s1Arr.splice(i, 1);
			s2Arr.splice(k, 1);

			i--;
		}
	}
	return count;
}

//lucky number
function isLucky(n) {
	let sumStart = 0;
	let sumEnd = 0;
	let strN = String(n);
	for (let i = 0; i < Math.ceil(strN.length / 2); i++) {
		//debugger;
		sumStart += +strN[i];
		sumEnd += +strN[strN.length - 1 - i];
		console.log(sumStart);
		console.log(sumEnd);
	}
	if (sumEnd === sumStart) {
		return true;
	} else {
		return false;
	}
}

// people among trees
function sortByHeight(a) {
	let valueHolder;
	for (let i = 0; i < a.length; i++) {
		if (a[i] === -1) {
			continue;
		} else {
			for (let j = 0; j < a.length; j++) {
				if (a[j] === -1) {
					continue;
				} else if (a[i] < a[j]) {
					valueHolder = a[j];
					a[j] = a[i];
					a[i] = valueHolder;
				}
			}
		}
	}
	return a;
}

//reverse strings inside parentesis

function reverseTheLastNestedParentesis(str) {
	let strArr = str.split('');

	let parEnd = strArr.indexOf(')');
	strArr.splice(parEnd, strArr.length - parEnd);
	let parStart = strArr.lastIndexOf('(');
	let neededPart = strArr.splice(parStart + 1, strArr.length - parStart);
	let tempArr = [];
	for (let i = neededPart.length - 1; i >= 0; i--) {
		tempArr.push(neededPart[i]);
	}
	let oldPart = '(' + neededPart.join('') + ')';
	let newPart = tempArr.join('');
	str = str.replace(oldPart, newPart);
	return str;
}

function reverseInParentheses(inputString) {
	while (inputString.indexOf(')') > 0) {
		inputString = reverseTheLastNestedParentesis(inputString);
	}

	return inputString;
}

// first and second division

function alternatingSums(a) {
	let sum1 = 0;
	let sum2 = 0;
	for (let i = 0; i < a.length; i++) {
		if (i % 2 === 0) {
			sum1 += a[i];
		} else {
			sum2 += a[i];
		}
	}
	let newArr = [];
	newArr.push(sum1);
	newArr.push(sum2);
	return newArr;
}

// add border to matrix
// shat lavn er

function addBorder(picture) {
	let tempArr = [];

	for (let i = 0; i < picture.length + 2; i++) {
		let tempRow = [];
		for (j = 0; j < picture[0].length + 2; j++) {
			if (i === 0 || i === picture.length + 2 - 1 || j === 0 || j === picture[0].length + 2 - 1) {
				tempRow.push('*');
			} else {
				tempRow.push(picture[i - 1][j - 1]);
			}
		}
		tempArr.push(tempRow.join(''));
	}
	return tempArr;
}
let check = addBorder([ 'Irena', 'Armen' ]);
console.log(check);

//similarity of arrays
function areSimilar(a, b) {
	let valueHolder;
	for (let i = 0; i < a.length; i++) {
		if (a[i] !== b[i]) {
			k = b.indexOf(a[i], i + 1);
			if (k > 0) {
				if (a[k] !== b[i]) {
					return false;
				} else {
					valueHolder = b[k];
					b[k] = b[i];
					b[i] = valueHolder;
					if (a.join('') === b.join('')) {
						return true;
					} else {
						return false;
					}
				}
			} else {
				return false;
			}
		}
	}
	return true;
}

//array similarity check alternative way

function areSimilar(a, b) {
	let strA = a.join('');
	let strB = b.join('');
	if (strA === strB) {
		return true;
	} else {
	}
}

//remove zeros from a number

function removeZeros(number) {
	let digitArr = [];
	let count = 0;
	while (number > 0) {
		k = number % 10;
		number = (number - k) / 10;
		if (k === 0 && count < 2) {
			digitArr.unshift(k);
			count++;
		} else if (k !== 0) {
			digitArr.unshift(k);
		}
	}
	/*let finalArr = [];

	if (digitArr.indexOf(0) !== -1 && digitArr.indexOf(0) !== digitArr.lastIndexOf(0)) {
		for (let i = 0; i < digitArr.length; i++) {
			if (digitArr[i] !== 0 || i === digitArr.lastIndexOf(0)) {
				finalArr.push(digitArr[i]);
			}
		}
	} else return 'nothing to remove';
*/
	return digitArr.join('');
}

// minimum steps to get array strictly increasing
// very nice solution
function arrayChange(inputArray) {
	let count = 0;
	for (let i = 1; i < inputArray.length; i++) {
		while (inputArray[i] <= inputArray[i - 1]) {
			inputArray[i]++;
			count++;
		}
	}
	return count;
}
