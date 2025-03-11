import React from 'react'
import { NavLink } from "react-router-dom";
function Header() {
    return (
        <div className="bg-amber-200 flex justify-between " style={{ padding: "20px" }}>
            <div className="w-25 text-danger px-10">
                <NavLink to="/">
                    <img style={{ width: "200px" }} src="/flags/logo.png" alt="" />
                </NavLink>

            </div>
            <div className='flex gap-2 text-xs items-center text-red-900'>
                <NavLink to="/">
                    About
                </NavLink>
                <NavLink to="/">
                    Contact us
                </NavLink>
            </div>
        </div>
    )
}

export default Header
