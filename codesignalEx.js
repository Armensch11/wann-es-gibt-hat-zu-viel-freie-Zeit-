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
