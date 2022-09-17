import React, { useEffect, useRef, useState } from 'react'

function MutableRef() {
    const [timer, setTimer] = useState(0)
    const interValRef = useRef<null | number>(null)

    const stopTimer = () => {
        interValRef.current && window.clearInterval(interValRef.current)
    }

    useEffect(() => {
        // setInterval returns a number, which is the id of the interval
        interValRef.current = window.setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
        return () => {
            stopTimer()
        }
    }, [])

    return (
        <div>
            HookTimer = {timer} -
            <button onClick={() => stopTimer()}>Stop Timer</button>
        </div>
    )
}

export default MutableRef