import React from 'react'

type PersonProps = {
    name: {
        first: string,
        last: string
    }
}

function Person({ name }: PersonProps) {
    return (
        <div className='App'>
            {name.first} {name.last}
        </div>
    )
}

export default Person