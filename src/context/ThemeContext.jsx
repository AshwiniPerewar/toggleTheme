import {createContext} from 'react'
import { useState } from 'react';

export const ThemeContext=createContext();

export const ThemeProvider=({children})=>
{
    const[theme,setTheme]=useState("light");

    const toggleTheme=()=>
    {
        if(theme==="light")
        {
        setTheme("dark");
        }
        else
        {
        setTheme("light");
        }
    };

    return (
    <ThemeContext.Provider 
    value={{
        theme, 
        isDarkMode: theme==="dark",
        toggleTheme,
    }}
    >
        {children}
        </ThemeContext.Provider>
    );
};