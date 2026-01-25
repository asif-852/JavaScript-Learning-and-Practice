type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let curr: number = init;
    return {
        increment : (): number => {return ++curr},
        decrement : (): number => {return --curr},
        reset : (): number => {return curr = init}
    };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */