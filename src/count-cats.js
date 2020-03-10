module.exports = function countCats(array) {
  let number = 0;
  array = array.flat();

  for (let i = 0; i < array.length; i++){
    if (String(array[i]) === '^^') {
      number++;
    }
  }

  return number;
}
