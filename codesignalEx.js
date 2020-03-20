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

//similarity of arrays
function areSimilar(a, b) {
	let valueHolder;
	for (let i = 0; i < a.length; i++) {
		if (a[i] !== b[i]) {
			k = b.indexOf(a[i]);

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
		}
	}
	return true;
}

//array similarity check alternative way

function areSimilar(a, b) {
	if (a.toString() === b.toString()) {
		return true;
	}
	let newA = [];
	let newB = [];
	for (let i = 0; i < a.length; i++) {
		if (a[i] !== b[i]) {
			newA.push(a[i]);
			newB.push(b[i]);
		}
	}
	if (newA.length === 2 && newA.reverse().toString() === newB.toString()) {
		return true;
	} else {
		return false;
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

// string to rearrange as palindrome
//eli vaty cher yndameny petq er zujgery hashvel, u vor menak mi hat kent lini

function palindromeRearranging(inputString) {
	let count;
	let oddcount = 0;
	let tempArr = inputString.split('');
	for (let i = 0; i < tempArr.length; i++) {
		count = 1;
		for (let j = 0; j < tempArr.length; j++) {
			if (i !== j) {
				if (tempArr[i] === tempArr[j]) {
					count++;
					tempArr.splice(j, 1);
					j--;
				}
			}
		}
		if (count % 2 !== 0) {
			oddcount++;
		}
	}
	if (oddcount > 1) {
		return false;
	} else {
		return true;
	}
}

//left right arms check
function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {}

// maximum adjacent difference
function arrayMaximalAdjacentDifference(inputArray) {
	let max = -Infinity;
	let diff;
	for (let i = 1; i < inputArray.length; i++) {
		diff = inputArray[i] - inputArray[i - 1];
		diff = Math.abs(diff);
		if (diff > max) {
			max = diff;
		}
	}
	return max;
}

// Ip4 string check
// mi qich shat en IF-ery stacvel
function isIPv4Address(inputString) {
	let checkArr = inputString.split('.');
	if (checkArr.length !== 4) {
		return false;
	}
	for (let i = 0; i < checkArr.length; i++) {
		if (isNaN(+checkArr[i]) || +checkArr[i] < 0 || +checkArr[i] >= 256) {
			return false;
		}
		if (+checkArr[i] === 0) {
			if (checkArr[i].length === 1) {
				continue;
			} else {
				return false;
			}
		}
		if (checkArr[i] !== String(+checkArr[i])) {
			return false;
		}
	}
	return true;
}

// avoid obstacles, or minimum length
//ajsinq minimal tivy vori vra bolor array-i tvery  mnacordoven bazanvum
function avoidObstacles(inputArray) {
	let nochange = false;
	while (!nochange) {
		let valueHolder;
		nochange = true;
		for (let i = 0; i < inputArray.length; i++) {
			if (inputArray[i] > inputArray[i + 1]) {
				valueHolder = inputArray[i + 1];
				inputArray[i + 1] = inputArray[i];
				inputArray[i] = valueHolder;
				nochange = false;
			}
		}
	}
	loop1: for (let i = 2; i < inputArray[inputArray.length - 1]; i++) {
		for (let j = 0; j < inputArray.length; j++) {
			if (inputArray[j] % i === 0) {
				continue loop1;
			}
		}
		return i;
	}
	return inputArray[inputArray.length - 1] + 1;
}

// image blur matrix
function threeToThreeSum(row, column, array) {
	let sum = 0;
	for (i = row - 1; i <= row + 1; i++) {
		for (j = column - 1; j <= column + 1; j++) {
			sum += array[i][j];
		}
	}
	return sum;
}
function boxBlur(image) {
	let finalArr = [];
	for (let i = 1; i < image.length - 1; i++) {
		let someArr = [];
		let res;
		for (let j = 1; j < image[i].length - 1; j++) {
			res = Math.floor(threeToThreeSum(i, j, image) / 9);
			someArr.push(res);
		}
		finalArr.push(someArr);
	}
	return finalArr;
}

//minesweeper hetaqrqira

function minesweeper(matrix) {
	let resArr = [];
	for (let i = 0; i < matrix.length; i++) {
		let tempArr = [];
		for (let j = 0; j < matrix[i].length; j++) {
			tempArr.push(matrix[i][j]);
		}
		resArr.push(tempArr);
	}

	for (let i = 0; i < resArr.length; i++) {
		for (let j = 0; j < resArr[0].length; j++) {
			if (resArr[i][j] === false) {
				resArr[i][j] = 0;
			}
			if (matrix[i][j] === true) {
				let count = -1;

				for (let k = i - 1; k <= i + 1; k++) {
					for (let l = j - 1; l <= j + 1; l++) {
						if (k >= 0 && l >= 0 && k < matrix.length && l < matrix[i].length) {
							if (matrix[k][l] === true) {
								count++;
							}
							if (matrix[k][l] === false) {
								resArr[k][l] += 1;
							}
						}
					}
				}
				console.log(count);
				resArr[i][j] = count;
			}
		}
	}

	return resArr;
}

//replace array element
function arrayReplace(inputArray, elemToReplace, substitutionElem) {
	if (elemToReplace !== substitutionElem) {
		while (inputArray.indexOf(elemToReplace) >= 0) {
			let i = inputArray.indexOf(elemToReplace);
			inputArray[i] = substitutionElem;
		}
	}
	return inputArray;
}

//check digits for even, mane-s solution again
//tujn lutsuma vsjotaki et n>0-y
function evenDigitsOnly(n) {
	let k;
	while (n > 0) {
		k = n % 10;
		n = (n - k) / 10;
		if (k % 2 !== 0) {
			return false;
		}
	}
	return true;
}

// chellange decode string
function decodeString(s) {
	let decArr = s.split('');
	let k = decArr.indexOf(']');

	while (k > 0) {
		let tempArr = decArr.slice(0, k);
		let start = tempArr.lastIndexOf('[');
		console.log(start);

		//the number ahead of brackets may be not a one digit
		let i = 1;
		let multiplic = [];
		while (!isNaN(+tempArr[start - i]) && tempArr[start - i]) {
			multiplic.unshift(tempArr[start - i]);
			i++;
		}
		let numOfTimes = +multiplic.join('');
		console.log(numOfTimes);
		decArr.splice(start - multiplic.length, k - start + multiplic.length + 1);

		for (let i = 0; i < numOfTimes; i++) {
			for (let j = start + 1; j < k; j++) {
				decArr.splice(j - multiplic.length - 1, 0, tempArr[j]);
			}
		}

		k = decArr.indexOf(']');
	}
	return decArr.join('');
}

// valid variable name,
// used ascII codes for check
function variableName(name) {
	let count = 1;

	if (
		name.charCodeAt(0) === 95 ||
		(name.charCodeAt(0) >= 65 && name.charCodeAt(0) <= 90) ||
		(name.charCodeAt(0) >= 97 && name.charCodeAt(0) <= 122)
	) {
		for (let i = 1; i < name.length; i++) {
			if (
				name.charCodeAt(i) === 95 ||
				(name.charCodeAt(i) >= 48 && name.charCodeAt(i) <= 57) ||
				(name.charCodeAt(i) >= 65 && name.charCodeAt(i) <= 90) ||
				(name.charCodeAt(i) >= 97 && name.charCodeAt(i) <= 122)
			) {
				count++;
			}
		}
		if (count === name.length) {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}

// alphabetic shift to next character

function alphabeticShift(inputString) {
	let shiftedStr = '';
	for (let i = 0; i < inputString.length; i++) {
		let asCode = inputString.charCodeAt(i);
		if (asCode === 122) {
			shiftedStr += 'a';
		} else {
			shiftedStr += String.fromCharCode(asCode + 1);
		}
	}
	return shiftedStr;
}

//chess field colors

function chessBoardCellColor(cell1, cell2) {
	let checkArr = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H' ];
	let columnCell1 = checkArr.indexOf(cell1[0]) + 1;
	let columnCell2 = checkArr.indexOf(cell2[0]) + 1;
	//mez petka miajn asel te nujn gujni dashteri vra en te voch, gujny imanaly partadir chi

	//mi hat shaxmati dasht sarqem 1 u 0 nerov
	let matrix = [];
	for (let i = 8; i > 0; i--) {
		let rowArray = [];
		for (let j = 1; j <= 8; j++) {
			if (i % 2 === 0 && j % 2 !== 0) {
				rowArray.push(0);
			} else if (i % 2 !== 0 && j % 2 === 0) {
				rowArray.push(0);
			} else {
				rowArray.push(1);
			}
		}
		matrix.push(rowArray);
	}
	if (matrix[+cell1[1] - 1][columnCell1 - 1] === matrix[+cell2[1] - 1][columnCell2 - 1]) {
		return true;
	} else {
		return false;
	}
}
//stic baner 30 u 31
function circleOfNumbers(n, firstNumber) {
	if (firstNumber > n / 2) {
		return firstNumber - n / 2;
	} else if (firstNumber < n / 2) {
		return n / 2 + firstNumber;
	}
	return 0;
}
function depositProfit(deposit, rate, threshold) {
	let years = 0;
	while (deposit < threshold) {
		deposit += deposit * rate / 100;
		years++;
	}
	return years;
}

// the smallest distance
function absoluteValuesSumMinimization(a) {
	let indexHolder;
	let minimum = +Infinity;
	for (let i = 0; i < a.length; i++) {
		let sum = 0;
		for (let j = 0; j < a.length; j++) {
			sum += Math.abs(a[j] - a[i]);
		}
		if (sum < minimum) {
			minimum = sum;
			indexHolder = i;
		}
	}
	return a[indexHolder];
}

// stic xndir
function extractEachKth(inputArray, k) {
	let index = i * k - i;
	let i = 1;
	while (!isNaN(inputArray[index])) {
		inputArray.splice(index, 1);
		i++;
		index = i * k - i;
	}
	return inputArray;
}

//k consecutive element sum
//lavn er
function arrayMaxConsecutiveSum(inputArray, k) {
	let max = -Infinity;
	let sum;
	let i = 0;
	while (i + k <= inputArray.length) {
		sum = 0;
		for (let j = i; j < i + k; j++) {
			sum += inputArray[j];
		}
		i++;
		if (sum > max) {
			max = sum;
		}
	}
	return max;
}

// up and down of the plant
function growingPlant(upSpeed, downSpeed, desiredHeight) {
	let height = 0;
	let dayCount = 0;
	while (height < desiredHeight) {
		height += upSpeed;
		dayCount++;
		if (height >= desiredHeight) {
			break;
		}
		height -= downSpeed;
	}
	return dayCount;
}

// vaty cher bajc eli if-ery shat eghav
function knapsackLight(value1, weight1, value2, weight2, maxW) {
	if (weight1 + weight2 <= maxW) {
		return value1 + value2;
	}
	if (weight1 <= maxW) {
		if (weight2 <= maxW) {
			if (value1 >= value2) {
				return value1;
			} else {
				return value2;
			}
		} else {
			return value1;
		}
	} else if (weight2 <= maxW) {
		return value2;
	} else {
		return 0;
	}
}

// prefix-y lriv apushutyuner er, es aveli bard depqi hamar em lutsel,
//parzvuma vor prefixy yndameny arajin indexic sksoghy petqa lini
function longestDigitsPrefix(inputString) {
	let maxArr = [ '' ];
	for (let i = 0; i < inputString.length; i++) {
		if (!isNaN(+inputString[i]) && inputString[i + 1] && isNaN(+inputString[i + 1])) {
			let tempArr = [];
			tempArr.unshift(inputString[i]);
			let k = 1;

			while (!isNaN(+inputString[i - k]) && inputString[i - k]) {
				tempArr.unshift(inputString[i - k]);
				k++;
			}
			if (tempArr.join('').length > maxArr[0].length) {
				maxArr.shift();
				maxArr.unshift(tempArr.join(''));
			}
		}
	}
	return maxArr;
}
//arajin indexic sksogh tver
function longestDigitsPrefix(inputString) {
	let maxArr = [ '' ];
	if (!isNaN(+inputString[0]) && inputString[0] !== ' ') {
		let tempArr = [];
		let i = 1;
		tempArr.push(inputString[0]);
		while (!isNaN(+inputString[i])) {
			tempArr.push(inputString[i]);
			i++;
		}
		if (tempArr.join('').length > maxArr[0].length) {
			maxArr.shift();
			maxArr.unshift(tempArr.join(''));
		}
	}

	return maxArr.toString();
}

//digit degree voncor eli em arel sranic

function digitDegree(n) {
	let sum;
	let degree = 0;
	while (n / 10 >= 1) {
		degree++;
		sum = 0;
		while (n > 0) {
			k = n % 10;
			sum += k;
			n = (n - k) / 10;
		}
		n = sum;
	}
	return degree;
}
