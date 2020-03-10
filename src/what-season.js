module.exports = function getSeason(date) {
  let newDate = new Date;

  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  if (newDate.prototype !== date.prototype || date.getUTCMonth() === undefined) {
    throw new Error;
  }        

  let month = date.getMonth();

  if (month === 11 || month < 2) {
    return 'winter';
  } else {
    if (month >= 2 && month < 5) {
      return 'spring';
    } else {
      if (month >= 5 && month < 8) {
        return 'summer';
      } else {
        if (month >= 8 && month < 11) {
          return 'autumn';
        }
      }
    }
  }
};
