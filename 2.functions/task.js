function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let avg = [0];
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] >= max) {
			max = arr[i];
		}
		if (arr[i] <= min) {
			min = arr[i];
		}
		sum = sum + arr[i];
	}
	avg = parseFloat((sum / arr.length).toFixed(2));
	return {
		min: min,
		max: max,
		avg: avg
	};
}


function summElementsWorker(...arr) {
	const initialValue = 0;
	const sum = arr.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		initialValue,
	);
	return sum;
}

function differenceMaxMinWorker(...arr) {
	let result;
	let max = Math.max.apply(null, arr);
	let min = Math.min.apply(null, arr);
	if (max === -Infinity) {
		result = 0;
	} else {
		result = max - min;
	}
	return result;
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement = sumEvenElement + arr[i];
		} else {
			sumOddElement = sumOddElement + arr[i];
		}
	}
	if (sumEvenElement !== null) {
		return sumEvenElement - sumOddElement;
	} else {
		return 0;
	}
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement = sumEvenElement + arr[i];
			count++;
		}
	}
	if (count !== 0) {
		return sumEvenElement / count;
	} else {
		return 0;
	}
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]);
		if (maxWorkerResult < result) {
			maxWorkerResult = result;
		}
	}

	return maxWorkerResult;
}
const arr = [
	[5, 5, 25, 4, 5],
	[69, 31, 1, 75, 24],
	[58, 42, 29, 11, 66],
	[39, 85, 22, 33, 3]
];
console.log(makeWork(arr, summElementsWorker));
console.log(makeWork(arr, differenceMaxMinWorker));
console.log(makeWork(arr, differenceEvenOddWorker));
console.log(makeWork(arr, averageEvenElementsWorker));
