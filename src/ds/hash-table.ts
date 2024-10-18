export class HashTable {
    private readonly _entries: [][];
    
    private _count: number = 0;
    get length() {
        return this._count;
    }
    
    get capacity() {
        return this._capacity;
    }
    
    constructor(private _capacity: number = 100) {
        this._entries = Array.from({ length: _capacity }, () => []);
    }
    
    public get(key: string | number): any | null {
        const hashed = this.hash(key);
        return this._entries[hashed] ?? null;
    }
    
    public set(key: string | number,  value: any): void {
        const hashed = this.hash(key);
        if (this._entries[hashed].length === 0) {
            this._count += 1;
        }
        this._entries[hashed] = value;
    }
    
    public remove(key: string | number): void {
        const hashed = this.hash(key);
        if (this._entries[hashed].length === 0) {
            this._count -= 1;
        }
        this._entries[hashed] = [];
    }
    
    public contains(key: string | number): boolean {
        const hashed = this.hash(key);
        return this._entries[hashed] ? true : false;
    }
    
    private hash(key: string | number): number {
        let converted: number  = typeof key === 'string' ?
            key.split('').reduce((a, c) => a + c.charCodeAt(0), 0)
            : key;
        return converted % this._capacity;
    }
}