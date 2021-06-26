function convertToRoman(num) {
  // create array of basic roman numerals (romNums) and equivalent decimals (decNums)
  let romNums = ["I", "V", "X", "L", "C", "D", "M"];
  let decNums = [1, 5, 10, 50, 100, 500, 1000];
  // create array of peculiar roman numerals (9, 4, 90, 40, 900, 400) less than 1000
  let pecRomNums = {
    IX: ["V", "I", "I", "I", "I"],
    IV: ["I", "I", "I", "I"],
    XC: ["L", "X", "X", "X", "X"],
    XL: ["X", "X", "X", "X"],
    CM: ["D", "C", "C", "C", "C"],
    CD: ["C", "C", "C", "C"],
  };
  let array1 = [];
  // loop through decNums starting from the end
  for (let i = decNums.length - 1; i >= 0; i--) {
    // check if num is a multiple of any element
    if (Math.floor(num / decNums[i]) > 0) {
      //if true, push same multiple of equivalent element in romNums into array1
      let j = Math.floor(num / decNums[i]);
      while (j > 0) {
        array1.push(romNums[i]);
        j--;
      }
      // deduct multiples of decNums element from num to obtain new value of num
      num = num - Math.floor(num / decNums[i]) * decNums[i];
    }
  }
  // loop through each key/value per in pecRomNums
  reStartLoop: for (let prop in pecRomNums) {
    // convert each prop value to a string
    var a = pecRomNums[prop].join("");
    // loop through array1
    for (let i = 0; i < array1.length; i++) {
      // for each i, and starting from i, slice the next 4 and 5 elements of array1
      var b = array1.slice(i, i + 4).join("");
      var c = array1.slice(i, i + 5).join("");
      // if a === c, remove c from array1 and replace with prop (key) and restartloop
      if (a === c) {
        let removed = array1.splice(i, 5, prop);
        continue reStartLoop;
        // else if a === b, remove b from array1 and replace with prop (key) and restartloop
      } else if (a === b) {
        let removed = array1.splice(i, 4, prop);
        continue reStartLoop;
      }
    }
  }
  // convert updated array1 to string and return it
  var romStr = array1.join("");
  return romStr;
}

convertToRoman(649);
// MMM CM XC IX
// MMM DCCCC LXXXX VIIII
