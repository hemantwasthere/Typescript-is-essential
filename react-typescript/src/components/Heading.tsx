import React from 'react'

type HeadingProps = {
    children: string
}

function Heading({ children }: HeadingProps) {
    return (
        <div className='App'>
            <h1>{children}</h1>
        </div>
    )
}

export default Heading