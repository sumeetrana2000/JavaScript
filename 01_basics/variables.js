const accountId = "LTD6488"
let userName = "Sumeet"
var userNo = "8548062422"
userAdd = "Basant Vihar Colony"

// accountId = "22321" --> NOT ALLOWED!

userName = "Rana"
userNo = "7888322044"
userAdd = "Dinanagar"

console.log("");
console.log(accountId);
console.log("");
console.table([userName, userNo, userAdd])
console.log("");

/*
Prefer not to use var
because of issue in block scope and functional scope
*/