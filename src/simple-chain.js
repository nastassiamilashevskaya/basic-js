const chainMaker = {
  chain : [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.chain.push(' ');
    } else {
      this.chain.push(String(value));
    }

    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position > this.chain.length || position <= 0) {
      this.chain = [];
      throw new Error;
    } else {
      this.chain.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let finalChain = this.chain.map(x => '( ' + x + ' )').join('~~');
    this.chain = [];
    return finalChain;
  }
};

module.exports = chainMaker;
