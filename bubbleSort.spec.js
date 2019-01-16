
describe('Bubble Sort', function () {
    it('is a function', function () {
        expect(typeof bubbleSort).toBe('function')
    });

    it('accepts and returns an array', function () {
        expect(bubbleSort([])).toEqual([]);
    })

    it('accepts a unsorted array and returns a sorted array', function () {
        let unsortedArr, sortedArr;

        unsortedArr = [3, 9, 1, 10, 15, 2, 7];
        sortedArr = [1, 2, 3, 7, 9, 10, 15];

        expect(bubbleSort(unsortedArr)).toEqual(sortedArr);
    })

    // if ('accepts a long array and returns a sorted array')
})