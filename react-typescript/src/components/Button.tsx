import React from 'react'

type ButtonProps = {
    // handleClick: () => void
    // handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

function Button({ handleClick }: ButtonProps) {
    return (
        <div className='App'>
            <button onClick={(e) => handleClick(e, 1)}>Button</button>
        </div>
    )
}

export default Button