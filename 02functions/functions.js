"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("Docker");
function signUpUser(name, email, password) {
    console.log(name, email, password);
}
signUpUser("Hemant", "hemant@typescriptlang.org", 123456);
var loginUser = function (email, isLoggedIn) {
    if (isLoggedIn === void 0) { isLoggedIn = false; }
    console.log(email, isLoggedIn);
};
loginUser("hemant@typescriptlang.org", true);
// how to handle many return type of function in typescript
// let getValue = (myVal: number): (string | boolean) => {
//     if(myVal<5){
//         return true
//     }
//     return "Value is greater than 5"
// }
var getHello = function (s) {
    return "__" + s + "__";
};
var heros = ["Batman", "thor", "Spiderman", "Ironman"];
// const heros = [1, 2, 3, 4]
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errMsg) {
    console.log(errMsg);
}
consoleError("ReferenceError");
// Some functions never return a value:
// The never type represents values which are never observed.In a return type, this means that the function throws an exception or terminates execution of the program.
// never also appears when TypeScript determines there’s nothing left in a union.
function handleError(errMsg) {
    throw new Error(errMsg);
}
