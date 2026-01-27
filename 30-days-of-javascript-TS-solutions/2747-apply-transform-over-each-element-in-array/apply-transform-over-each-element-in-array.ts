function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    for(let i: number = 0; i < arr.length; i++) {
        arr[i] = fn(arr[i], i);
    }
    return arr;
};