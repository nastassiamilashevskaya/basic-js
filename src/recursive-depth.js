module.exports = class DepthCalculator {
    calculateDepth(arr, arrDepths = [], depth = 0) {
        depth++;
        arr.forEach(element => {
            if (Array.isArray(element)) {
                this.calculateDepth(element, arrDepths, depth);
            }
        });
        arrDepths.push(depth);
        return Math.max(...arrDepths);
    }
};