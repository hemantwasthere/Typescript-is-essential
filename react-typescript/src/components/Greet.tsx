import React from 'react'

type GreetProps = {
    name: string
    messageCount?: number // Optional type by adding ? after the property name
    isLoggedIn: boolean
}

function Greet({ name, messageCount = 0, isLoggedIn }: GreetProps) {
    return (
        <div className='App'>
            <h2>
                {isLoggedIn ? `Welcome ${name}! You have ${messageCount} unread messages.` : 'Welcome Guest'}
            </h2>
        </div>
    )
}

export default Greet