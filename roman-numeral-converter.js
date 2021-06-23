function convertToRoman(num) {
  let romNums = ["I", "V", "X", "L", "C", "D", "M"];
  let decNums = [1, 5, 10, 50, 100, 500, 1000];
  let specRomNums = {
    IX: ["V", "I", "I", "I", "I"],
    IV: ["I", "I", "I", "I"],
    XC: ["L", "X", "X", "X", "X"],
    XL: ["X", "X", "X", "X"],
    CM: ["D", "C", "C", "C", "C"],
    CD: ["C", "C", "C", "C"],
  };
  let array1 = [];
  for (let i = decNums.length - 1; i >= 0; i--) {
    if (Math.floor(num / decNums[i]) > 0) {
      let j = Math.floor(num / decNums[i]);
      while (j > 0) {
        array1.push(romNums[i]);
        j--;
      }
      num = num - Math.floor(num / decNums[i]) * decNums[i];
    }
  }
  reStartLoop: for (let prop in specRomNums) {
    var a = specRomNums[prop].join("");
    for (let i = 0; i < array1.length; i++) {
      var b = array1.slice(i, i + 4).join("");
      var c = array1.slice(i, i + 5).join("");
      if (a === c) {
        let removed = array1.splice(i, 5, prop);
        continue reStartLoop;
      } else if (a === b) {
        let removed = array1.splice(i, 4, prop);
        continue reStartLoop;
      }
    }
  }
  var romStr = array1.join("");
  console.log(array1, romStr);
  return romStr;
}

convertToRoman(649);
// MMM CM XC IX
// MMM DCCCC LXXXX VIIII
