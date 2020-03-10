module.exports = function createDreamTeam(members) {
  let name = '';
  if (members instanceof Array) {
    for (let i = 0; i < members.length; i++){
    if (typeof members[i] === 'string') {
      let teamMate = members[i];
      teamMate = teamMate.trim();
      name += teamMate[0];
    }
  }
  } else {
    return false;
  }
  return name.toUpperCase().split('').sort().join('');
};