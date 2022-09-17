import React, { createContext, useContext } from 'react'
import { theme } from './theme'

type ThemeContextProviderProps = {
    children: React.ReactNode
}

const ThemeContext = createContext(theme)

export const useThemeContext = () => {
    return useContext(ThemeContext)
}

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
    return <ThemeContext.Provider value={theme}>
        {children}
    </ThemeContext.Provider>
}