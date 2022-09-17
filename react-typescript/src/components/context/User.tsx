import React from 'react'
import { useUserContext } from './UserContext'

function User() {
    const userContext = useUserContext()

    const handleLogin = () => {
        userContext && userContext.setUser({
            name: 'Hemant',
            email: 'hello@itsmehemant.tech'
        })
    }
    const handleLogout = () => {
        userContext && userContext.setUser(null)
    }

    return (
        <div>
            <button onClick={handleLogin} >Login</button>
            <button onClick={handleLogout} >Logout</button>
            <div>User name is {userContext?.user?.name}</div>
            <div>User email is {userContext?.user?.email} </div>
        </div>
    )
}

export default User