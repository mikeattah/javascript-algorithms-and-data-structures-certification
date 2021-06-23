function rot13(str) {
  let array1 = str.split("");
  console.log(array1);
  let array2 = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
  ];
  let array3 = [
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  console.log(array2.length, array3.length);
  let array4 = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      let j = array2.indexOf(array1[i]);
      array4.push(array3[j]);
    } else if (array3.includes(array1[i])) {
      let j = array3.indexOf(array1[i]);
      array4.push(array2[j]);
    } else {
      array4.push(array1[i]);
    }
  }
  console.log(array4);
  let newStr = array4.join("");
  console.log(newStr);
  return newStr;
}

rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
