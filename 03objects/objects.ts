const User = {
    name: "hitesh",
    email: "hitesh@lco.dev",
    isActive: true
}

function createUser({ name: string, isPaid: boolean }) { }
createUser({ name: "hitesh", isPaid: false })

let newObj = { name: "hitesh", isPaid: false, email: "email@mail.com" } // now here it should have stopped me from passing email, but it doesn't, thats the bad behaviour of objects in typescript
createUser(newObj)


function createCourse(): { courseName: string, price: number } {
    return {
        courseName: "reactjs",
        price: 499
    }
}
createCourse()

export { }

