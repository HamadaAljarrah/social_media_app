import React, { useState, useContext, createContext } from "react";


export type theme = 'light' | 'dark';
type Props = { children: React.ReactNode }
export interface ITheme { theme: theme; toggleTheme: ()=>void; }
const themeContext = createContext<ITheme>({}as ITheme);

export const ThemProvider = ({ children }: Props) => {

    const [theme, setTheme] = useState<theme>('light')
    const toggleTheme = ()=>{
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
    return (
        <themeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </themeContext.Provider>

    )
}

export const useTheme = () => {
    return useContext(themeContext)
}