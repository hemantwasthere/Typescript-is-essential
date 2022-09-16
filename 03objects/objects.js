"use strict";
exports.__esModule = true;
var User = {
    name: "hitesh",
    email: "hitesh@lco.dev",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "hitesh", isPaid: false });
var newObj = { name: "hitesh", isPaid: false, email: "email@mail.com" }; // now here it should have stopped me from passing email, but it doesn't, thats the bad behaviour of objects in typescript
createUser(newObj);
function createCourse() {
    return {
        courseName: "reactjs",
        price: 499
    };
}
createCourse();
