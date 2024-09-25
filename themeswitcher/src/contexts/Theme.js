import React, { useContext, createContext } from "react";

export const ThemeContext = React.createContext({
    themeMode:'light',
    darkTheme: ()=>{},
    lightTheme: ()=>{},
})

export const ThemeContextProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}