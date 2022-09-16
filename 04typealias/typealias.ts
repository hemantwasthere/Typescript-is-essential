type User = {
    name: string,
    email: string,
    isActive: boolean
}

// make your own name for the default types 😆😆
type MyString = string;
type bool = boolean;


function createUser(user: User): User {
    return user;
}
createUser({ name: "", email: "", isActive: true })

export { };

