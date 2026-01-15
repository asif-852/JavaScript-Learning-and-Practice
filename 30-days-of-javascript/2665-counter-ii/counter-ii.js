/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let curr = init
    var ans = {
        increment : () => {return ++curr},
        decrement : () => {return --curr},
        reset : () => {return curr = init}
    }
    return ans
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */