import React, { useState } from 'react'
import LOGO from '../assets/lungs.png'
import Button from './Button'
import { MdMenu } from "react-icons/md";

const Navbar = () => {
    const[showMenu, setShowMenu] = useState(false);

    const show = () => {
        setShowMenu(prev => !prev)
    }
  return (
    <nav className='px-10 max-md:px-2 py-5 flex  items-center  overflow-hidden shadow-sm max-md:bg-blue-950'>
        <div className='flex justify-between items-center  w-full '>
            <div className='border w-16 h-16 flex rounded-full items-center justify-center'>
                <img 
                    src={LOGO}
                    height={40}
                    width={40}
                />
            </div>
            <ul className='flex  justify-center gap-x-12 p-6  max-md:hidden text-lg font-semibold text-white bg-blue-950'>
                <li>
                    Home
                </li>
                <li>
                    About
                </li>
                <li>
                    Services
                </li>
                <li>
                    Contacts
                </li>

            </ul>
            <div className='max-md:hidden flex items-center gap-x-4'>
                <p className='font-semibold text-lg'>Sign In</p>
                <Button />
            </div>
            <div className='block md:hidden'>
                <MdMenu
                    size={30}
                    className='font-bold text-blue-950 max-md:text-white cursor-pointer'
                    onClick={show}
                />
                <div className={`md:hidden absolute    py-4 right-0 mt-8 ${showMenu ? 'mr-2' : 'mr-[-200px]' } shadow-md transition duration-1000 ease-in`}>
                    <ul className='w-full flex flex-col gap-4 text-slate-600 font-semibold cursor-pointer'>
                        <li className='hover:bg-slate-50  px-16 py-2 '>
                            Home
                        </li>
                        <li className='hover:bg-slate-50  px-16 py-2'>
                            About
                        </li>
                        <li className='hover:bg-slate-50  px-16 py-2'>
                            Services
                        </li>
                        <li className='hover:bg-slate-50  px-16 py-2'>
                            Contacts
                        </li>

                    </ul>
                </div>
            </div>
        </div>
        
    </nav>
  )
}

export default Navbar