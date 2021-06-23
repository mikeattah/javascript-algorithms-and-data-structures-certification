function telephoneCheck(str) {
  let regex1 = /[0-9]|\-|\(|\)|\s/g;
  let regex2 = /[0-9]/g;
  let array1 = str.match(regex1);
  let array2 = str.match(regex2);
  let a = array1.length;
  let b = array2.length;
  function checkDigitsAndCode(arr) {
    if (arr.length === 11 && (arr[0] > 1 || arr[0] <= 0)) {
      return false;
    } else if (arr.length === 11 && arr[0] === "1") {
      return true;
    }
    if (arr.length === 10) {
      return true;
    }
    return false;
  }
  if (checkDigitsAndCode(array2)) {
    if (a === 12 && array1[3] === "-" && array1[7] === "-") {
      return true; // 1
    } else if (
      a === 13 &&
      array1[0] === "(" &&
      array1[4] === ")" &&
      array1[8] === "-"
    ) {
      return true; // 2
    } else if (
      a === 14 &&
      array1[0] === "(" &&
      array1[4] === ")" &&
      array1[5] === " " &&
      array1[9] === "-"
    ) {
      return true; // 3
    } else if (a === 12 && array1[3] === " " && array1[7] === " ") {
      return true; // 4
    } else if (a === 10) {
      return true; // 5
    } else if (
      a === 14 &&
      array1[1] === " " &&
      array1[5] === " " &&
      array1[9] === " "
    ) {
      return true; // 6
    } else if (
      a === 14 &&
      array1[1] === " " &&
      array1[5] === "-" &&
      array1[9] === "-"
    ) {
      return true; // 7
    } else if (
      a === 16 &&
      array1[1] === " " &&
      array1[2] === "(" &&
      array1[6] === ")" &&
      array1[7] === " " &&
      array1[11] === "-"
    ) {
      return true; // 8
    } else if (
      a === 15 &&
      array1[1] === "(" &&
      array1[5] === ")" &&
      array1[6] === " " &&
      array1[10] === "-"
    ) {
      return true; // 9
    } else if (
      a === 15 &&
      array1[1] === " " &&
      array1[2] === "(" &&
      array1[6] === ")" &&
      array1[10] === "-"
    ) {
      return true; // 10
    } else if (
      a === 14 &&
      array1[1] === "(" &&
      array1[5] === ")" &&
      array1[9] === "-"
    ) {
      return true; // 11
    } else if (array1[0] === "(" || array1[0] === "-") {
      return false;
    } else if (
      (array1.includes("(") && !array1.includes(")")) ||
      (!array1.includes("(") && array1.includes(")"))
    ) {
      return false;
    } else if (array1[2] === " ") {
      return false;
    } // 12
  } else {
    return false;
  }
}

telephoneCheck("555-555-5555"); // 1
telephoneCheck("(555)555-5555"); // 2
telephoneCheck("(555) 555-5555"); // 3
telephoneCheck("555 555 5555"); // 4
telephoneCheck("5555555555"); // 5
telephoneCheck("1 555 555 5555"); // 6 | 1,5,9
telephoneCheck("1 555-555-5555"); // 7 | 1,5,9
telephoneCheck("1 (555) 555-5555"); // 8 | 1,2,6,7,11
telephoneCheck("1(555) 555-5555"); // 9 | 1,5,6,10
telephoneCheck("1 (555)555-5555"); // 10 | 1,2,6,10
telephoneCheck("1(555)555-5555"); // 11 | 1,5,9
telephoneCheck("55 55-55-555-5"); // 12 | 2

// telephoneCheck("123**&!!asdf#");
// telephoneCheck("(6054756961)");
// telephoneCheck("-1 (757) 622-7382");
