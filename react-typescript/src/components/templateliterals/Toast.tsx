import React from 'react'

// position prop can be one of
// "left-center" | "left-top" | "left-bottom" | "center" | "center-top" |
// "center-bottom" | "right-center" | "right-top" | "right-bottom" 

type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

type ToastProps = {
    // Exclude take two args, first is the type and second is the type which we want to exclude
    // Exclude<type, excluded type>
    position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center'
}

function Toast({ position }: ToastProps) {
    return (
        <div>
            Toast Notification Position - {position}
        </div>
    )
}

export default Toast