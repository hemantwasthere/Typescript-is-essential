import React, { useState } from 'react'

type AuthUser = {
    name: string,
    email: string
}

function User() {
    const [user, setUser] = useState<null | AuthUser>(null) // defining the type of usestate that it could be of null or AuthUser

    // const [user, setUser] = useState<AuthUser>({} as AuthUser) // type assertion - if we are sure that user value will be provided before component mounts, then we can use type assertion. for eg. like we sets login state in useEffect hook

    const handleLogin = () => {
        setUser({ name: 'Hemant', email: 'hello@itsmehemant.tech' })
    }
    const handleLogout = () => {
        setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
        </div>
    )
}

export default User