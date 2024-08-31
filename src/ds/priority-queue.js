"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityQueue = void 0;
class PriorityQueue {
    entries = [];
    get length() {
        return this.entries.length;
    }
    push(element, priority) {
        this.entries.push({ element, priority });
        this.entries.sort((a, b) => a.priority - b.priority);
    }
    pop() {
        return this.entries.shift();
    }
    isEmpty() {
        return this.entries.length === 0;
    }
    clear() {
        while (this.entries.length > 0) {
            this.entries.pop();
        }
    }
}
exports.PriorityQueue = PriorityQueue;
