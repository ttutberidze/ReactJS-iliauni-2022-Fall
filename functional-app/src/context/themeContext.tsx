import { createContext, useCallback, useState, FC, ReactNode, useContext } from "react";

type Theme = 'light'|'dark';

interface ThemeModel {
    background: string, color: string
}

interface ContextModel {
    theme: ThemeModel,
    changeTheme: () => void,
}

const defaultTheme = {background: 'white', color: 'black'};

const themes = {
    dark: {
        background: '#000000', color: '#FFFFFF',
    },
    light: {
        background: 'white', color: 'black',
    }
}

const ThemeContext = createContext<ContextModel>({
    changeTheme: () => {},
    theme: defaultTheme,
});

const ThemeContextProvider: FC<{children: ReactNode}> = ({children}) => {
    const [themeName, setThemeName] = useState<Theme>('light');
    const [theme, setTheme] = useState<ThemeModel>(defaultTheme);

    const changeTheme = useCallback(() => {
        setThemeName((theme) => theme === 'dark' ? 'light' : 'dark')
        setTheme(themeName === 'light' ? themes['dark'] : themes['light']);
    }, [themeName])

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)

export default ThemeContextProvider;