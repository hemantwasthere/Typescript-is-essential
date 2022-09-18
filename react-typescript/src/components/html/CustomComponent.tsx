import React from 'react'
import Greet from '../Greet'

function CustomComponent(props: React.ComponentProps<typeof Greet>) { // We have extracted the props of Greet component and passed it to CustomComponent
    return (
        <div>
            {props.name}
        </div>
    )
}

export default CustomComponent