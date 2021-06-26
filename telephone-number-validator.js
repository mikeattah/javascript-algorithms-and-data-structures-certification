function telephoneCheck(str) {
  let regex1 = /[0-9]|\-|\(|\)|\s/g;
  let regex2 = /[0-9]/g;
  // create array from filtering phone numbers with regular expressions
  // array1 shows all acceptable characters
  let array1 = str.match(regex1);
  // array2 shows only numeric characters
  let array2 = str.match(regex2);
  let a = array1.length;
  let b = array2.length;
  // check if phone number has 10 or 11 digits
  // if phone number has 11 digits, confirm country code is "1" (US)
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
  // check if phone numbers that return true from checkDigitsAndCode function
  // also matches any of the 11 acceptable formats for US phone numbers
  if (checkDigitsAndCode(array2)) {
    // 1
    if (a === 12 && array1[3] === "-" && array1[7] === "-") {
      return true;
    } else if (
      // 2
      a === 13 &&
      array1[0] === "(" &&
      array1[4] === ")" &&
      array1[8] === "-"
    ) {
      return true;
    } else if (
      // 3
      a === 14 &&
      array1[0] === "(" &&
      array1[4] === ")" &&
      array1[5] === " " &&
      array1[9] === "-"
    ) {
      return true;
      // 4
    } else if (a === 12 && array1[3] === " " && array1[7] === " ") {
      return true;
      // 5
    } else if (a === 10) {
      return true;
    } else if (
      // 6
      a === 14 &&
      array1[1] === " " &&
      array1[5] === " " &&
      array1[9] === " "
    ) {
      return true;
    } else if (
      // 7
      a === 14 &&
      array1[1] === " " &&
      array1[5] === "-" &&
      array1[9] === "-"
    ) {
      return true;
    } else if (
      // 8
      a === 16 &&
      array1[1] === " " &&
      array1[2] === "(" &&
      array1[6] === ")" &&
      array1[7] === " " &&
      array1[11] === "-"
    ) {
      return true;
    } else if (
      // 9
      a === 15 &&
      array1[1] === "(" &&
      array1[5] === ")" &&
      array1[6] === " " &&
      array1[10] === "-"
    ) {
      return true;
    } else if (
      // 10
      a === 15 &&
      array1[1] === " " &&
      array1[2] === "(" &&
      array1[6] === ")" &&
      array1[10] === "-"
    ) {
      return true;
    } else if (
      // 11
      a === 14 &&
      array1[1] === "(" &&
      array1[5] === ")" &&
      array1[9] === "-"
    ) {
      return true;
      // if phone number starts with parenthesis or dash, return false
    } else if (array1[0] === "(" || array1[0] === "-") {
      return false;
    } else if (
      // if phone number contains incomplete parenthesis, return false
      (array1.includes("(") && !array1.includes(")")) ||
      (!array1.includes("(") && array1.includes(")"))
    ) {
      return false;
      // if phone number contains space after two (2) digits, return false
    } else if (array1[2] === " ") {
      return false;
    }
    // if all above conditions do not apply, return false
  } else {
    return false;
  }
}

// 1
telephoneCheck("555-555-5555");
// 2
telephoneCheck("(555)555-5555");
// 3
telephoneCheck("(555) 555-5555");
// 4
telephoneCheck("555 555 5555");
// 5
telephoneCheck("5555555555");
// 6
telephoneCheck("1 555 555 5555");
// 7
telephoneCheck("1 555-555-5555");
// 8
telephoneCheck("1 (555) 555-5555");
// 9
telephoneCheck("1(555) 555-5555");
// 10
telephoneCheck("1 (555)555-5555");
// 11
telephoneCheck("1(555)555-5555");

telephoneCheck("55 55-55-555-5");

// telephoneCheck("123**&!!asdf#");
// telephoneCheck("(6054756961)");
// telephoneCheck("-1 (757) 622-7382");
