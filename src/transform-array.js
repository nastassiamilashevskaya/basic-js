module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error;
    }

    if (!arr.length) {
        return [];
    }

    let stack = [];

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--discard-next': {
                i++;
                break;
            }
            case '--discard-prev': {
                if (stack.length > 0) {
                    stack.pop();
                }
                break;
            }
            case '--double-next': {
                if (i < arr.length - 1) {
                    stack.push(arr[i + 1]);
                }
                break;    
            }
            case '--double-prev': {
                if (i > 0) {
                    stack.push(arr[i - 1]);
                }
                break;
            }
            default: {
                stack.push(arr[i]);
                break;
            }
        }
    }

    return stack;
};
