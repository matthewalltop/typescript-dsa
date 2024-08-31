"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashTable = void 0;
class HashTable {
    capacity;
    constructor(capacity = 100) {
        this.capacity = capacity;
    }
    get(key) {
        throw new Error("Not Implemented");
    }
    set(key, value) {
        throw new Error("Not Implemented");
    }
    contains(key) {
        throw new Error("Not Implemented");
    }
    hash(key) {
        // TODO: Be Better.
        return 23 % this.capacity;
    }
}
exports.HashTable = HashTable;
