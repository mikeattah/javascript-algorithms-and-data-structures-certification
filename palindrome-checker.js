function palindrome(str) {
    let newStr = str.toLowerCase();
    let a = newStr.match(/[a-z0-9]/g);
    console.log(a);
    let b = [];
    for(let i = a.length - 1; i >= 0; i--) {
      b.push(a[i]);
    }
    console.log(b);
    let c = a.join("");
    let d = b.join("");
    console.log(c, d);
    if(c === d) {
      return true;
    } else {
      return false;
    }
  }
  