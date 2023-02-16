import React from 'react';
import {MdOutlineCancel} from "react-icons/md";
import {themeColors} from "../data/dummy";
import {TooltipComponent} from "@syncfusion/ej2-react-popups";
import {BsCheck} from "react-icons/bs";
import {useStateContext} from "../contexts/ContextProvider";

const ThemeSettings = () => {
    const {setThemeSettings, setMode, currentMode, setColor, currentColor} = useStateContext();
    return (
        <div className="bg-half-transparent w-screen h-screen fixed nav-item top-0 right-0">
            <div className="float-right h-screen dark:text-gray-200 bg-white dark:bg-main-dark-bg w-[350px] p-2">
                <div className="flex justify-between items-center p-4 ml-4">
                    <p className="font-semibold text-xl">
                        Settings
                    </p>
                    <button
                        type="button"
                        onClick={() => setThemeSettings(false) }
                        style={{color: 'rgb(157, 171, 180)'}}
                        className="hover:drop-shadow-xl text-2xl p-3 hover:bg-light-gray rounded-full"
                    >
                        <MdOutlineCancel/>
                    </button>
                </div>
                <div className="flex flex-col border-t-1 border-color p-4 ml-4">
                    <p className="font-semibold text-lg">Theme Option</p>

                    <div className="mt-4">
                        <input
                            type="radio"
                            id="light"
                            name="theme"
                            value="Light"
                            className="cursor-pointer"
                            onChange={setMode}
                            checked={currentMode === 'Light'}
                        />
                        <label
                            htmlFor="light"
                            className="ml-2 text-md cursor-pointer"
                        >
                            Light
                        </label>
                    </div>
                    <div className="mt-4">
                        <input
                            type="radio"
                            id="dark"
                            name="theme"
                            value="Dark"
                            onChange={setMode}
                            checked={currentMode === 'Dark'}

                        />
                        <label
                            htmlFor="dark"
                            className="ml-2 text-md cursor-pointer"
                        >
                            Dark
                        </label>
                    </div>
                </div>
                <div className="flex flex-col border-t-1 border-color p-4 ml-4">
                    <p className="font-semibold text-lg">Theme Color</p>
                    <div className="flex gap-3">
                        {themeColors.map((item, index) => (
                            <TooltipComponent key={index} content={item.name} position="TopCenter">
                                <div
                                    className="relative mt-2 cursor-pointer flex gap-5 items-center"
                                    key={item.name}
                                >
                                    <button
                                        type="button"
                                        className="h-10 w-10 rounded-full cursor-pointer"
                                        style={{ backgroundColor: item.color }}
                                        onClick={() => setColor(item.color)}
                                    >
                                        <BsCheck className={`ml-2 text-2xl text-white ${item.color === currentColor ? 'block' : 'hidden'}`} />
                                    </button>
                                </div>
                            </TooltipComponent>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThemeSettings;