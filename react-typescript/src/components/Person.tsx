import React from 'react'
import { PersonProps } from './Person.types'

function Person({ name }: PersonProps) {
    return (
        <div className='App'>
            {name.first} {name.last}
        </div>
    )
}

export default Person