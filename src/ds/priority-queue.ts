export class PriorityQueue<T> {
    private entries: { element: T,  priority: number }[] = [];
    public get length(): number {
        return this.entries.length;
    }
    
    public push(element: T,  priority: number): void {
        this.entries.push({element, priority});
        this.entries.sort((a, b) => a.priority - b.priority);
    }
    
    public pop(): { element: T,  priority: number } | undefined {
        return this.entries.shift();
    }
    
    public isEmpty(): boolean {
        return this.entries.length === 0;
    }
    
    public clear(): void {
        while(this.entries.length > 0) {
            this.entries.pop();
        }
    }
}



