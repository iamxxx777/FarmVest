import { useState, useEffect, createContext } from "react"

export const ThemeContext = createContext()

export function ThemeProvider(props) {
    const [darkMode, setDarkMode] = useState(true)

    let localTheme

    if (typeof window !== "undefined") {
        localTheme = localStorage.getItem('darkMode')
    }
    
    const getTheme = () => {
        if (localStorage.getItem('darkMode')) {
            if (localStorage.getItem('darkMode') === 'true') {
                setDarkMode(true);
            } else if (localStorage.getItem('darkMode') === 'false') {
                setDarkMode(false);
            }
        } else {
            setDarkMode(true);
        }
    }
    
    const setTheme = (theme) => {
        localStorage.setItem('darkMode', theme)
    }
    
    const setLocalTheme = () => {
        if (localTheme === 'true') {
            setTheme(false)
            setDarkMode(false)
        } else {
            setTheme(true);
            setDarkMode(true)
        }
    }
    
    
    useEffect(() => {
        getTheme()
    }, []);

    return <ThemeContext.Provider value={{ darkMode, setLocalTheme }}>{props.children}</ThemeContext.Provider>;
}