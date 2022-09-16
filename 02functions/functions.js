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
