class VigenereCipheringMachine {

    constructor (typeOfMachine) {
        typeOfMachine === false ? this.isReversed = true : this.isReversed = false;
        this.alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    checkArguments(arg1, arg2) {
        if (!arg1 || !arg2) {
            throw new Error();
        }
    }

    getResultString(array) {
        if (this.isReversed) {
            return array.reverse().join('');
        } else {
            return array.join('');
        }
    }

    encrypt(message, key) {
        this.checkArguments(message, key);

        const messageArray = message.toUpperCase().split('');
        const keyRepeatTimes = Math.ceil(message.length / key.length);
        const keyArray = key.toUpperCase().repeat(keyRepeatTimes).split('');
        let result = [];

        messageArray.forEach(element => {
            if (this.alphabets.indexOf(element) !== -1) {
                result.push(this.alphabets[this.alphabets.indexOf(element) + this.alphabets.indexOf(keyArray.shift())]);
            } else {
                result.push(element);
            }
        });

        return this.getResultString(result);
    }

    decrypt(encryptedMessage, key) {
        this.checkArguments(encryptedMessage, key);

        const messageArray = encryptedMessage.toUpperCase().split('');
        const keyRepeatTimes = Math.ceil(encryptedMessage.length / key.length);
        const keyArray = key.toUpperCase().repeat(keyRepeatTimes).split('');
        let result = [];

        messageArray.forEach(element => {
            let indexOfCode = this.alphabets.indexOf(keyArray[0]);
            let indexOfMessage = this.alphabets.indexOf(element);

            if (indexOfMessage !== -1) {
                keyArray.shift();
                if (indexOfMessage <= indexOfCode) {
                    result.push(this.alphabets[indexOfMessage - indexOfCode + 26]);
                } else {
                    result.push(this.alphabets[indexOfMessage - indexOfCode]);
                }
            } else {
                result.push(element);
            }
        });

        return this.getResultString(result);
    }
}

module.exports = VigenereCipheringMachine;
