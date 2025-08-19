import React from 'react'
import { NavLink } from "react-router-dom";
function Header() {
    return (
         <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white flex justify-between border-red-900/20 shadow-2xl   w-full z-10  border-b-red-900 border-b-2" >
            <div className=" text-danger px-10 py-2 flex items-center ">
                <NavLink to="/">
                    <img  className=' h-8 w-20 p-1.5' src="/flags/logo.png" alt="" />
                </NavLink>

            </div>
        </div>
    )
}

export default Header
