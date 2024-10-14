import {describe, expect, test} from '@jest/globals';
import {PriorityQueue} from "./priority-queue";

describe('PriorityQueue', () => {
    
    test('Pushes element into queue', () => {
        const pq = new PriorityQueue<number>();
        pq.push(1, 1);
        const res = JSON.stringify(pq.pop());
        const expected = JSON.stringify({element: 1,  priority: 1});
        expect(res).toBe(expected);
    });
    
    test('Removes element from queue', () => {
        const pq = new PriorityQueue<number>();
        pq.push(1, 1);
        pq.push(2, 2);
        pq.push(3, 3);
        pq.push(4, 4);
        
        expect(pq.length).toBe(4);
    });
    
    test('Can be cleared', () => {
        const pq = new PriorityQueue<number>();
        pq.push(1, 1);
        pq.push(2, 2);
        pq.push(3, 3);
        pq.push(4, 4);
        
        pq.clear();
        
        expect(pq.length).toBe(0);
    });
    
    test('Pops elements in sorted order', () => {
        const pq = new PriorityQueue<number>();
        pq.push(1, 1);
        pq.push(2, 2);
        pq.push(3, 3);
        pq.push(4, 4);
        
        expect(pq.pop()?.element).toBe(1);
        expect(pq.pop()?.element).toBe(2);
        expect(pq.pop()?.element).toBe(3);
        expect(pq.pop()?.element).toBe(4);
    });
    
    test('Indicates isEmpty', () => {
        const pq = new PriorityQueue<number>();
        expect(pq.isEmpty()).toBeTruthy();
        
        pq.push(1, 1);
        pq.push(2, 2);
        pq.push(3, 3);
        pq.push(4, 4);
        
        expect(pq.isEmpty()).toBeFalsy();
        
        pq.clear();
        
        expect(pq.isEmpty()).toBeTruthy();
    });
})