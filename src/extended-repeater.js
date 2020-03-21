module.exports = function repeater(str, options) {
    let { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options;
    if (separator === undefined) {
        separator = '+';
    }
    if (!additionSeparator) {
        additionSeparator = '|';
    }
    if (addition === undefined) {
        addition = '';
    }
    if (typeof addition !== 'string' || typeof str !== 'string') {
        addition = String(addition);
        str = String(str);
    } 

    const stringOfAddition = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);

    return new Array(repeatTimes).fill(str + stringOfAddition).join(separator);

};
  