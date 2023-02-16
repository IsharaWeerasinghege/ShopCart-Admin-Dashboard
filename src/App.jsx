import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {TooltipComponent} from "@syncfusion/ej2-react-popups";
import {FiSettings} from "react-icons/fi";
import {Navbar, Sidebar, ThemeSettings} from "./componets";
import {
    Area,
    Bar,
    Calender,
    Customers,
    Ecommerce,
    Editor,
    Employees,
    Kanban,
    Line,
    Order,
    Pie,
    Stacked
} from "./pages";
import {useStateContext} from "./contexts/ContextProvider";

const App = () => {
    const {
        activeMenu,
        themeSettings,
        setThemeSettings,
        currentColor,
        currentMode,
        setCurrentColor,
        setCurrentMode,
    } = useStateContext();

    useEffect(() => {
        setCurrentColor(localStorage.getItem('colorMode'));
        setCurrentMode(localStorage.getItem('themeMode'));
    }, [])

    return (
        <div className={currentMode === 'Dark' ? 'dark' : ''}>
            <BrowserRouter>
                <div className="flex relative dark:bg-main-dark-bg">
                    <div className="fixed right-4 bottom-4" style={{zIndex: 1000}}>
                        <TooltipComponent content="Settings" position="top">
                            <button
                                type="button"
                                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray rounded-full text-white"
                                style={{background: currentColor}}
                                onClick={() => setThemeSettings(true)}
                            >
                                <FiSettings/>
                            </button>
                        </TooltipComponent>
                    </div>
                    {activeMenu ? (
                        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                            <Sidebar/>
                        </div>
                    ) : (
                        <div className="w-0 dark:bg-secondary-dark-bg">
                            <Sidebar/>
                        </div>
                    )}
                    <div
                        className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
                        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                            <Navbar/>
                        </div>

                        <div>
                            {themeSettings && <ThemeSettings/>}
                            <Routes>
                                {/*Dashboard*/}
                                <Route path="/" element={<Ecommerce/>}/>
                                <Route path="/ecommerce" element={<Ecommerce/>}/>

                                {/*Pages*/}
                                <Route path="/orders" element={<Order/>}/>
                                <Route path="/employees" element={<Employees/>}/>
                                <Route path="/customers" element={<Customers/>}/>

                                {/*Apps*/}
                                <Route path="/kanban" element={<Kanban/>}/>
                                <Route path="/editor" element={<Editor/>}/>
                                <Route path="/calendar" element={<Calender/>}/>

                                {/*Charts*/}
                                <Route path="/line" element={<Line/>}/>
                                <Route path="/area" element={<Area/>}/>
                                <Route path="/bar" element={<Bar/>}/>
                                <Route path="/pie" element={<Pie/>}/>
                                <Route path="/stacked" element={<Stacked/>}/>

                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;