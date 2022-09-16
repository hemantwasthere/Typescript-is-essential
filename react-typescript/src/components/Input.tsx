import React from 'react'

type InputProps = {
    value: string
    handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function Input({ value, handleOnChange }: InputProps) {

    // const handleOnChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     console.log(event.target.value)
    // }

    return (
        <div className='App'>
            <input onChange={handleOnChange} value={value} type="text" />
            {/* <input onChange={handleOnChange2} value={value} type="text" /> */}
        </div>
    )
}

export default Input