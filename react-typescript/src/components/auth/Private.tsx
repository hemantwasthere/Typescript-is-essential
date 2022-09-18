import React from 'react'
import Login from './Login'
import { ProfileProps } from './Profile'

type PrivateProps = {
    isLoggedIn: boolean
    component: React.ComponentType<ProfileProps>
}

function Private({ isLoggedIn, component: Component }: PrivateProps) {
    // 'Private' cannot be used as a JSX component. Its return type 'void' is not a valid JSX element.
    // isLoggedIn ? <Component name="Hemant" /> : <Login /> // --> this wont work as we need to return JSX

    if (isLoggedIn) {
        return <Component name="Hemant" />
    } else {
        return <Login />
    }
}

export default Private