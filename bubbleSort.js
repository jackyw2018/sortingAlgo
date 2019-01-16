
// iterative solution
// function bubbleSort(arr = []) {
//     let copiedArr = arr.slice();
//     let counter = 0;
//     let sorted = true;

//     for (let i = 0; i < copiedArr.length; i++) {
//         for (let j = 0; j < copiedArr.length - i - 1; j++) {
//             let curr = copiedArr[j];
//             let next = copiedArr[j + 1];

//             if (curr > next) {
//                 counter++;
//                 copiedArr[j] = next;
//                 copiedArr[j + 1] = curr;
//                 sorted = false;
//             }
//         }
//         if (sorted) {
//             break;
//         }
//     }

//     console.log(counter);
//     return copiedArr;
// };

// recursive solution
function bubbleSort(arr = []) {
    let copiedArr = arr.slice();
    let sorted = true;

    for (let i = 0; i < copiedArr.length - 1; i++) {
        let curr = copiedArr[i];
        let next = copiedArr[i + 1];

        if (curr > next) {
            copiedArr[i] = next;
            copiedArr[i + 1] = curr;
            sorted = false;
        }
    }

    if (!sorted) {
        return bubbleSort(copiedArr.slice(0, -1)).concat(copiedArr[copiedArr.length - 1]);
    } else {
        return copiedArr;
    }
};



// [3, 9, 1, 10, 15, 2, 7]