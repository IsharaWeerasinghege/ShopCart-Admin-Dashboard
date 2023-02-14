import React, {useEffect} from 'react';
import {useStateContext} from "../contexts/ContextProvider";
import {TooltipComponent} from "@syncfusion/ej2-react-popups";
import {AiOutlineMenu} from "react-icons/ai";
import {BsCart3, BsChatLeft} from "react-icons/bs";
import {RiNotification3Line} from "react-icons/ri";
import avater from '../data/avatar.jpg';
import {MdKeyboardArrowDown} from "react-icons/md";
import Cart from "./Cart";
import Chat from "./Chat";
import Notification from "./Notification";
import UserProfile from "./UserProfile";


const NavButton = ({title, customFunc, icon, color, dotColor}) => (
    <TooltipComponent content={title} position="BottomCenter">
        <button
            type="button"
            onClick={() => customFunc()}
            style={{color}}
            className="relative text-xl rounded-full p-3 hover:bg-light-gray"
        >
      <span
          style={{background: dotColor}}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
            {icon}
        </button>
    </TooltipComponent>
);

const Navbar = () => {
    const { setActiveMenu, handleClick, isClicked, screenSize, setScreenSize} = useStateContext();

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    useEffect(() => {
        if (screenSize <= 900) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize])

    return (
        <div className="flex justify-between p-2 md:mx-6 relative">
            <NavButton title="Menu" customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color="blue"
                       icon={<AiOutlineMenu/>}/>
            <div className="flex">
                <NavButton
                    title="Cart"
                    customFunc={() => handleClick('cart')}
                    color="blue"
                    icon={<BsCart3/>}
                />

                <NavButton
                    title="Chat"
                    customFunc={() => handleClick('chat')}
                    color="blue"
                    dotColor="#03c9d7"
                    icon={<BsChatLeft/>}
                />

                <NavButton
                    title="Notifications"
                    customFunc={() => handleClick('notification')}
                    dotColor="#03c9d7"
                    color="blue"
                    icon={<RiNotification3Line/>}
                />

                <TooltipComponent content="Profile" position="BottomCenter">
                    <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
                         onClick={() => handleClick('userProfile')}>
                        <img src={avater} alt="profile" className="rounded-full w-8 h-8"/>
                        <p>
                            <span className="text-gray-400 text-14">Hi, </span>
                            {' '}
                            <span className="text-gray-400 font-semibold ml-1 text-14">Michel</span>
                        </p>
                        <MdKeyboardArrowDown className="text-gray-400 text-14"/>
                    </div>
                </TooltipComponent>
                {isClicked.cart && <Cart/>}
                {isClicked.chat && <Chat/>}
                {isClicked.notification && <Notification/>}
                {isClicked.userProfile && <UserProfile/>}
            </div>
        </div>
    )
}

export default Navbar;