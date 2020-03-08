function accum(s) {
  var letters = s.split('');
  let solution = [];
  for (var i = 0; i < letters.length; i++) {
    solution.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
  }
  return solution.join('-');
}

console.log(accum("ZpglnRxqenU"));
console.log(accum("NyffsGeyylB"));
console.log(accum("MjtkuBovqrU"));
console.log(accum("EvidjUnokmM"));
console.log(accum("HbideVbxncC"));