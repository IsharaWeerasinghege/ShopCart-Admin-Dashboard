import React, {createContext, useContext, useState} from "react";

const StateContext = createContext();

const initialState = {
    chat: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#1A97F5');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);
    const [textStyle, setTextStyle] = useState({color: '#33373E'});
    const handleClick = (clicked) => setIsClicked({...initialState, [clicked]: true});
    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
        changeTextStyle();
        setThemeSettings(false);
    };

    const setColor = (mode) => {
        setCurrentColor(mode);
        localStorage.setItem('colorMode', mode);
        setThemeSettings(false)
    }

    function changeTextStyle(){
        if (currentMode === 'Dark') {
            setTextStyle({color: '#33373E'})
        } else if (currentMode === 'Light') {
            setTextStyle({color: '#fff'})
        }
    }

    return (
        <StateContext.Provider
            value={
                {
                    activeMenu,
                    setActiveMenu,
                    handleClick,
                    isClicked,
                    setIsClicked,
                    screenSize,
                    setScreenSize,
                    currentColor,
                    currentMode,
                    setMode,
                    setColor,
                    themeSettings,
                    setThemeSettings,
                    setCurrentColor,
                    setCurrentMode,
                    textStyle,
                    changeTextStyle,
                    initialState
                }
            }
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);