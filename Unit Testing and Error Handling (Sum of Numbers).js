describe('Sum of numbers', () => {
    it('Should return the sum of the numbers in the array', () => {
        let numbers = [1, 2, 3, 4, 5];
        let actualSum = sum(numbers);
        let expectedSum =  15;
        assert.equal(actualSum, expectedSum);
    });
    it('Should return the sum of the numbers with negative number in the array', () => {
        let numbers = [1, 2, 3, 4, -5];
        let actualSum = sum(numbers);
        let expectedSum =  5;
        assert.equal(actualSum, expectedSum);
    });
    it('Should return the sum of the numbers with only zeroes in the array', () => {
        let numbers = [0, 0, 0, 0, 0];
        let actualSum = sum(numbers);
        let expectedSum =  0;
        assert.equal(actualSum, expectedSum);
    });
});
