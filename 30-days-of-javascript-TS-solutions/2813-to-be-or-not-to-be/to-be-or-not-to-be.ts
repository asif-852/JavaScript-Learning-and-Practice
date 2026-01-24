type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    const errorFunc = (msg: string): never => {
        throw new Error(msg);
    }
    const ans: ToBeOrNotToBe = {
        toBe: (val2: any): boolean => {
            {return (val === val2) ? true : errorFunc("Not Equal")}
        },
        notToBe: (val2: any): boolean => {
            {return (val !== val2) ? true : errorFunc("Equal")}
        }
    }
    return ans;
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */