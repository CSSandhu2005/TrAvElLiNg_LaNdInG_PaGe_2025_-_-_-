import React from 'react'
import { NAV_LINKS } from '../../constants/constants'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <img src="./hilink-logo.svg" alt="Logo" width={74} height={29}/>
        <ul className="hidden gap-12 lg:flex">
            {
                NAV_LINKS.map((link) => (
                    <li className="regular-16 text-gray-50 flexCenter pb-1.5 cursor-pointer transition-all hover:font-bold" key={link.key} href={link.href}>{link.label}</li>
                ))
            }
        </ul>

        <div className="hidden lg:flexCenter">
            <Button 
                type="button"
                title="LogIn"
                icon="/user.svg"
                variant="btn_dark_green"
            />
        </div>

        <img className="cursor-pointer transition-all inline-block lg:hidden " src="./menu.svg" alt="HamBurGer Menu" width={32} height={32}/>
    </nav>
  )
}

export default Navbar