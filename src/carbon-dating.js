const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') {
    return false;
  } else {
    let sampleActivityNumber = parseFloat(sampleActivity)
    if (isNaN(sampleActivityNumber) || sampleActivityNumber <= 0 || sampleActivityNumber > MODERN_ACTIVITY) {
      return false;
    } else {
      let k = 0.693/HALF_LIFE_PERIOD;
      number = Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivityNumber)/k);
      return number;  
    }
  }
};
