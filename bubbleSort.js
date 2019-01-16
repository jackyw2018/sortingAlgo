
function bubbleSort(arr = []) {
    let copiedArr = arr.slice();

    for (let i = 0; i < copiedArr.length; i++) {
        for (let j = 0; j < copiedArr.length - i - 1; j++) {
            let curr = copiedArr[j];
            let next = copiedArr[j + 1];

            if (curr > next) {
                copiedArr[j] = next;
                copiedArr[j + 1] = curr;
            }
        }
    }

    return copiedArr;
};

// [3, 9, 1, 10, 15, 2, 7]