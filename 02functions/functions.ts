function addTwo(num: number): number {
    return num + 2
}
addTwo(5)



function getUpper(val: string): string {
    return val.toUpperCase()
}
getUpper("Docker")



function signUpUser(name: string, email: string, password: number): void {
    console.log(name, email, password)
}
signUpUser("Hemant", "hemant@typescriptlang.org", 123456)


let loginUser = (email: string, isLoggedIn: boolean = false): void => {
    console.log(email, isLoggedIn)
}
loginUser("hemant@typescriptlang.org", true)


// how to handle many return type of function in typescript
// let getValue = (myVal: number): (string | boolean) => {
//     if(myVal<5){
//         return true
//     }
//     return "Value is greater than 5"
// }

const getHello = (s: string): string => {
    return "__" + s + "__"
}

const heros = ["Batman", "thor", "Spiderman", "Ironman"]
// const heros = [1, 2, 3, 4]
heros.map((hero): string => {
    return `hero is ${hero}`
})


function consoleError(errMsg: string): void {
    console.log(errMsg)
}
consoleError("ReferenceError")


// Some functions never return a value:
// The never type represents values which are never observed.In a return type, this means that the function throws an exception or terminates execution of the program.
// never also appears when TypeScript determines there’s nothing left in a union.
function handleError(errMsg: string): never {
    throw new Error(errMsg);
}



export { }

