import {describe, expect} from '@jest/globals';
import { binarySearch }  from './binary-search';

describe('binary search', () => {
    const test = [1,3,6,14,15,17,19,22,27,29,31,32,35,37,40,43,47,49,51,55,58,64,67,70,73,75,86,93,99];

    it('should return the target element if found.', () => {
        const target = 35;
        const result = binarySearch(test,  target);
        expect(result).toEqual(35);
    });

    it('should return -1 if element not found.', () => {
        const target = 36;
        const result = binarySearch(test,  target);
        expect(result).toEqual(-1);
    });
})