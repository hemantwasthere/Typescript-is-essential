import React from 'react'

type GreetProps = {
    name: string
}

function Greet({ name }: GreetProps) {
    return (
        <div>
            Hello, My name is {name} aka Dread
        </div>
    )
}

export default Greet