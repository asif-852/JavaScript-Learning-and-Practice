/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    function errorFunc(msg) {
        throw Error(msg)
    }
    var ans = {
        toBe : (val2) => {return (val === val2) ? true : errorFunc("Not Equal")},
        notToBe : (val2) => {return (val !== val2) ? true : errorFunc("Equal")}
    }
    
    return ans
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */