import React from 'react'

type ButtonProps = {
    variant: 'primary' | 'secondary'
} & React.ComponentProps<'button'> // now it will be including all the props of html button

// ...rest -> remaining props 
function CustomButton({ variant, children, ...rest }: ButtonProps) {
    return (
        <button className={`class-with-${variant}`} {...rest}> {children}</button>
    )
}

export default CustomButton