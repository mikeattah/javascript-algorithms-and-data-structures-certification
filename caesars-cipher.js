function rot13(str) {
  // split str into an array, array1
  let array1 = str.split("");
  console.log(array1);
  // create two (2) arrays containing all alphabets, 13 elements in each array
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
  // loop through array1
  for (let i = 0; i < array1.length; i++) {
    // if array2 incudes element in array1, push the element in array3 with corresponding
    // index number into array4
    if (array2.includes(array1[i])) {
      let j = array2.indexOf(array1[i]);
      array4.push(array3[j]);
      // if array3 incudes element in array1, push the element in array2 with corresponding
      // index number into array4
    } else if (array3.includes(array1[i])) {
      let j = array3.indexOf(array1[i]);
      array4.push(array2[j]);
      // else push empty strings into array4
    } else {
      array4.push(array1[i]);
    }
  }
  console.log(array4);
  // convert array4 into a string and return it
  let newStr = array4.join("");
  console.log(newStr);
  return newStr;
}

rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
