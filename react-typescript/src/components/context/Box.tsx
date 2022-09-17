import React from 'react'
import { useThemeContext } from './ThemeContext'

function Box() {
    const theme = useThemeContext()
    return (
        <div style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}>
            Theme context
        </div>
    )
}

export default Box