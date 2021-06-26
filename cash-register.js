function checkCashRegister(price, cash, cid) {
  let array1 = [];
  // for each currency and amount in cid, push an object with curName and availAmt keys
  // showing currency name and available amount
  for (let i = 0; i < cid.length; i++) {
    array1.push({ curName: cid[i][0], availAmt: cid[i][1] });
  }
  var change = { status: "", change: [] };
  // create object with currency unit keys and currency values
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
  // calculate change due
  let changeDue = cash - price;
  // loop through each currency unit
  reStartLoop: for (let prop in curUnits) {
    // if change due is above a currency unit, calculate how much of change due
    // can be paid in that denomination
    if (curUnits[prop] <= changeDue) {
      var a = prop;
      var b = curUnits[prop];
      var c = Math.floor(changeDue / b);
      // then loop through cid
      for (let i = 0; i < cid.length; i++) {
        // check if available amount contains the particular denomination
        if (cid[i][0] === a) {
          // if true, calculate how much of available amount can be returned in
          // that denomination as change due
          let d = Math.floor(cid[i][1] / b);
          // check if available amount for that denomination is greater than or equal to
          // c (how much of change due can be paid in that denomination)
          if (d >= c) {
            // if true, calculate amount payable in the denomination and push it into change array
            // and restartloop
            let e = b * c;
            change.change.push([cid[i][0], e]);
            changeDue = (changeDue - e).toFixed(2);
            continue reStartLoop;
            // otherwise, calculate amount payable in the denomination and push it into change array
            // deduct amount payable from changeDue, to obtain new value of changeDue
            // and reStartLoop
          } else if (d < c) {
            let e = b * d;
            change.change.push([cid[i][0], e]);
            changeDue = (changeDue - e).toFixed(2);
            continue reStartLoop;
          }
        }
      }
    }
  }
  var sumCid = 0;
  var sumChange = 0;
  // calculate the initial value of changeDue
  changeDue = cash - price;
  // calculate the total amount of money in cid
  for (let i = 0; i < cid.length; i++) {
    sumCid += cid[i][1];
  }
  // calculate the total amount of change required based on change array in change object
  for (let j = 0; j < change.change.length; j++) {
    sumChange += change.change[j][1];
  }
  // determine if funds in cid is sufficient to pay changeDue
  // reset change object based on result and return it
  if (sumCid > changeDue) {
    if (changeDue > sumChange) {
      change = { status: "INSUFFICIENT_FUNDS", change: [] };
    } else {
      change.status = "OPEN";
    }
  } else if (sumCid === changeDue) {
    change.status = "CLOSED";
    change.change = cid;
  } else if (sumCid < changeDue) {
    change = { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  return change;
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
checkCashRegister(19.5, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);
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
