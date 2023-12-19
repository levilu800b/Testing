import { it, expect } from 'vitest';

import { add } from './math';

it('Should summarize all number values in an array', () => {
    // Arrange
    const numbers = [1, 2, 3];

    // Act
    const result = add(numbers);

    // Assert
    const expectedResult = numbers.reduce(
        (prevValue, currValue) => prevValue + currValue,
        0
    );
    expect(result).toBe(expectedResult);
});

it('Should yield NaN if at least one invalid number is provided', () => {
    const input = ['invalid', 1];

    const result = add(input);

    expect(result).toBeNaN();
});

it('Should yield a correct sum if an array of numeric string values is provided', () => {
    const input = ['1', '2']

    const result = add(input);

    const expectedResult = input.reduce(
        (prevValue, currValue) => +prevValue + +currValue,
        0
    );
    expect(result).toBe(expectedResult);
});