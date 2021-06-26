function palindrome(str) {
  // convert str to lower case
  let newStr = str.toLowerCase();
  // ensure newStr only contains alphanumeric characters
  let a = newStr.match(/[a-z0-9]/g);
  let b = [];
  // starting from the end of array 'a', push each element into array b
  for (let i = a.length - 1; i >= 0; i--) {
    b.push(a[i]);
  }
  // convert array a and b into strings
  let c = a.join("");
  let d = b.join("");
  // compare the strict equality of a and b, and return true/false
  if (c === d) {
    return true;
  } else {
    return false;
  }
}
