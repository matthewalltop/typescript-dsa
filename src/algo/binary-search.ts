
const binarySearch = (arr: number[], target: number): number => {
    let low = 0,
        high = arr.length - 1;
    while(low <= high) {
        const mid = low + Math.floor((high - low) / 2);
        if (arr[mid] === target) return arr[mid];
        if(arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
};

export { binarySearch };