import React, { useEffect, useRef } from 'react'

function DomRef() {
    // const inputRef = useRef<HTMLInputElement>(null)
    const inputRef = useRef<HTMLInputElement>(null!) // if we're sure our ref is never null when we are accessing, then we can add non null assertion, which allows us to focus without optional chaining

    useEffect(() => {
        // inputRef.current?.focus()
        inputRef.current.focus()
    }, [])


    return (
        <div>
            <input type="text" ref={inputRef} />
        </div>
    )
}

export default DomRef