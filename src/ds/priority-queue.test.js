"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const priority_queue_1 = require("./priority-queue");
(0, globals_1.describe)('PriorityQueue', () => {
    (0, globals_1.test)('Pushes element into queue', () => {
        const pq = new priority_queue_1.PriorityQueue();
        pq.push(1, 1);
        const res = JSON.stringify(pq.pop());
        const expected = JSON.stringify({ element: 1, priority: 1 });
        (0, globals_1.expect)(res).toBe(expected);
    });
    (0, globals_1.test)('Removes element from queue', () => {
        const pq = new priority_queue_1.PriorityQueue();
        pq.push(1, 1);
        pq.push(2, 2);
        pq.push(3, 3);
        pq.push(4, 4);
        (0, globals_1.expect)(pq.length).toBe(4);
    });
    (0, globals_1.test)('Can be cleared', () => {
        const pq = new priority_queue_1.PriorityQueue();
        pq.push(1, 1);
        pq.push(2, 2);
        pq.push(3, 3);
        pq.push(4, 4);
        pq.clear();
        (0, globals_1.expect)(pq.length).toBe(0);
    });
    (0, globals_1.test)('Pops elements in sorted order', () => {
        const pq = new priority_queue_1.PriorityQueue();
        pq.push(1, 1);
        pq.push(2, 2);
        pq.push(3, 3);
        pq.push(4, 4);
        (0, globals_1.expect)(pq.pop()?.element).toBe(1);
        (0, globals_1.expect)(pq.pop()?.element).toBe(2);
        (0, globals_1.expect)(pq.pop()?.element).toBe(3);
        (0, globals_1.expect)(pq.pop()?.element).toBe(4);
    });
    (0, globals_1.test)('Indicates isEmpty', () => {
        const pq = new priority_queue_1.PriorityQueue();
        (0, globals_1.expect)(pq.isEmpty()).toBeTruthy();
        pq.push(1, 1);
        pq.push(2, 2);
        pq.push(3, 3);
        pq.push(4, 4);
        (0, globals_1.expect)(pq.isEmpty()).toBeFalsy();
        pq.clear();
        (0, globals_1.expect)(pq.isEmpty()).toBeTruthy();
    });
});
