function checkCashRegister(price, cash, cid) {
  let array1 = [];
  for (let i = 0; i < cid.length; i++) {
    array1.push({ curName: cid[i][0], availAmt: cid[i][1] });
  }
  console.log(array1);
  var change = { status: "", change: [] };
  // console.log(change);
  var curUnits = {
    "ONE HUNDRED": 100,
    TWENTY: 20,
    TEN: 10,
    FIVE: 5,
    ONE: 1,
    QUARTER: 0.25,
    DIME: 0.1,
    NICKEL: 0.05,
    PENNY: 0.01,
  };
  // console.log(curUnits);
  let changeDue = cash - price;
  // console.log(changeDue);
  reStartLoop: for (let prop in curUnits) {
    // R
    // console.log(curUnits[prop]);
    if (curUnits[prop] <= changeDue) {
      console.log(curUnits[prop]);
      var a = prop;
      var b = curUnits[prop];
      var c = Math.floor(changeDue / b);
      console.log(a, b, c);
      for (let i = 0; i < cid.length; i++) {
        if (cid[i][0] === a) {
          console.log(cid[i][0], a);
          let d = Math.floor(cid[i][1] / b); //
          console.log(d);
          if (d >= c) {
            let e = b * c;
            change["change"].push([cid[i][0], e]);
            changeDue = (changeDue - e).toFixed(2);
            continue reStartLoop;
          } else if (d < c) {
            let e = b * d;
            change["change"].push([cid[i][0], e]);
            changeDue = (changeDue - e).toFixed(2);
            continue reStartLoop;
          }
        }
      }
    }
  }
  var sumCid = 0;
  var sumChange = 0;
  changeDue = cash - price;
  for (let i = 0; i < cid.length; i++) {
    sumCid += cid[i][1];
  }
  for (let j = 0; j < change["change"].length; j++) {
    sumChange += change["change"][j][1];
  }
  if (sumCid > changeDue) {
    if (changeDue > sumChange) {
      change = { status: "INSUFFICIENT_FUNDS", change: [] };
    } else {
      change["status"] = "OPEN";
    }
  } else if (sumCid === changeDue) {
    change["status"] = "CLOSED";
    change["change"] = cid;
  } else if (sumCid < changeDue) {
    change = { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  console.log(sumCid, sumChange, changeDue);
  console.log(change);
  return change;
}

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
checkCashRegister(19.5, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 1],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);
