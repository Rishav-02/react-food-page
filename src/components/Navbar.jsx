import React, { useState } from "react";

// Al icons present in React Icons
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
} from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { TbTruckDelivery , TbDiscount2} from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import {FaQrcode} from "react-icons/fa";
import {IoMdNotifications} from "react-icons/io"

const Navbar = () => {
  //State Hook where initial value 'false', 'nav' is current state and 'setNav' is the function that is used to update state
  const [nav, setNav] = useState(false);

  return (
    // First div contain whole container 'className' apply on whole app and position:sticky top-0 z-40 bg-white these all are used the stuck navbar to top while scrolling.
    <div className="max-w-[1640px] mx-auto bg-white sticky top-0 z-40 flex justify-between items-center p-2">
      {/* Left side this div use for i.e menu,app-name,toogle */}
      <div className="flex items-center ml-2">
        {/* This div for Menu, here initial value of nav is false then '!nav' means true */}
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
        {/* This h1 for app-name. sm-small,md-medium,lg-large */}
        <h1 className="text-2xl sm:text-3xl px-2 m-4 font-serif cursor-pointer">
          Just <span className="font-bold pr-6">Eats</span>
        </h1>
        {/* This div for toogle and []- square bracket means customize value */}
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2 cursor-pointer">
            Delivery
          </p>
          <p className="p-2 cursor-pointer">Pickup</p>
        </div>
      </div>

      {/* Search Input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[300px] mr-3">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 focus:outline-none pr-5"
          type="text"
          placeholder="Search food" 
        />
      </div>

    {/* Login and Sign up button */}
    <button className="hidden font-bold text-white cursor-pointer py-2 items-center rounded-full bg-black lg:flex">Log in</button> 
     
    <button className="hidden font-bold text-white cursor-pointer py-2 items-center rounded-full bg-black lg:flex">Sign up</button>

      {/* Cart button  */}
      <button
        className="bg-black text-white hidden md:flex items-center py-2 mr-3 rounded-full"
      >
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>

      {/* Mobile Menu */}

      {/* Overlay, class and className are same */}
      {nav ? (
        <div className="bg-black/70 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : ""
      }

      {/* Side drawer menu, true then first run if false then second run */}
      {/* This div control whole navbar content */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-500"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4 font-serif">
          Just <span className="font-bold">Eats</span>
        </h2>

        {/* Navbar Content */}
        <nav>
          <ul className="flex flex-col p-4 text-gray-800 cursor-pointer">
            <li class="text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>
            <li className="text-xl py-4 flex">
              <MdFavorite size={25} className="mr-4" /> Favorites
            </li>
            <li className="text-xl py-4 flex">
              <IoMdNotifications size={25} className="mr-4" /> Notification
            </li>
            <li className="text-xl py-4 flex">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="text-xl py-4 flex">
              <FaQrcode size={25} className="mr-4" /> QR Codes
            </li>
            <li className="text-xl py-4 flex">
              <TbDiscount2 size={25} className="mr-4" /> Discount
            </li>
            <li className="text-xl py-4 flex">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
