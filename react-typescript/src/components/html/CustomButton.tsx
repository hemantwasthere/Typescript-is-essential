import React from 'react'


// what if we want to restrict children type to only string we use Omit keyword for that

type ButtonProps = {
    variant: 'primary' | 'secondary'
    children: string // now children has type of "string & React.ReactNode"
    // } & React.ComponentProps<'button'> // now it will be including all the props of html button
} & Omit<React.ComponentProps<'button'>, 'children'> // now children is restricted to string type only cuz we have omitted the type React.ReactNode from the props of button

// ...rest -> remaining props 
function CustomButton({ variant, children, ...rest }: ButtonProps) {
    return (
        <button className={`class-with-${variant}`} {...rest}> {children}</button>
    )
}

export default CustomButton