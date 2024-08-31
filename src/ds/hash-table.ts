type Key = string | number;
export class HashTable<K extends Key, V> {
    
    constructor(private capacity: number = 100) {
        
    }
    
    public get(key: K): V {
        throw new Error("Not Implemented");
    }
    
    public set(key: K,  value: V): void {
        throw new Error("Not Implemented");
    }
    
    public contains(key: K): boolean {
        throw new Error("Not Implemented");
    }
    
    
    
    
    
    
    
    private hash(key: K): number {
        // TODO: Be Better.
        return 23 % this.capacity;
    }
}