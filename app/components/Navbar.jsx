"use client"
import { useAuth } from '@/context/Authcontext';
import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
    const { user , logout} = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="relative w-full">
            <div className='p-2 w-full px-4 md:px-10 font-medium bg-[#E11D48] text-center uppercase text-white text-xs md:text-sm'>
                free Online Marriage Biodata Creator 😎
            </div>

            <nav className='flex justify-between items-center p-4 px-6 md:px-12 shadow-lg bg-white relative z-50'>
                <Link href='/'>
                    <img src="/assets/Logo.png" alt="Logo" className='w-28 md:w-34 cursor-pointer' />
                </Link>

                <ul className='hidden md:flex gap-8 text-lg font-medium text-gray-700'>
                    <li className="hover:text-[#E11D48] transition-colors"><Link href="/">Home</Link></li>
                    <li className="hover:text-[#E11D48] transition-colors"><Link href="/about">About</Link></li>
                    <li className="hover:text-[#E11D48] transition-colors"><Link href="/contact">Contact</Link></li>
                </ul>

                <div className='flex items-center gap-4'>
                    <div className='hidden md:block transition-colors duration-200 rounded-md font-semibold'>
                        {user ? (
                            <div className='flex items-center'>
                                <img src='/assets/avatar.png' alt="Avatar" className='w-10 h-10 rounded-full mr-2' />
                                <span className='text-lg text-gray-800'>{user.name}</span>
                                   <button onClick={() =>logout()} className='px-4 ml-5 cursor-pointer py-2 font-medium text-sm bg-[#E11D48] border-[#E11D48] border-2 text-white rounded-md'> Log out</button>                         
                            </div>
                        ) : (
                            <Link href="/login" className='bg-[#E11D48] text-white px-6 py-2 rounded-full hover:bg-rose-600 transition-all'>
                                Login
                            </Link>
                        )}
                    </div>

                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-gray-700 p-1 focus:outline-none"
                    >
                        {isOpen ? <X size={30} /> : <Menu size={30} />}
                    </button>
                </div>
            </nav>

            <div className={`
                absolute top-full left-0 w-full bg-white shadow-xl z-40 transition-all duration-300 ease-in-out md:hidden
                ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'}
            `}>
                <ul className='flex flex-col p-6 gap-4 text-lg font-medium text-gray-700 border-t'>
                    <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
                    <li><Link href="/about" onClick={toggleMenu}>About</Link></li>
                    <li><Link href="/contact" onClick={toggleMenu}>Contact</Link></li>
                    <hr />
                    {user ? (
                        <li className='flex items-center justify-between py-2'>
                            <div className='flex items-center'>
                                <img src='/assets/avatar.png' alt="Avatar" className='w-10 h-10 rounded-full mr-3' />
                                <span>{user.name}</span>
                            </div>
                            <button onClick={() =>logout()} className='px-3 cursor-pointer py-1 font-medium text-sm bg-[#E11D48] border-[#E11D48] border-2 text-white rounded-md'> Log out</button>
                        </li>
                    ) : (
                        <li>
                            <Link
                                href="/login"
                                onClick={toggleMenu}
                                className='text-[#E11D48] font-bold'
                            >
                                Login
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Navbar;