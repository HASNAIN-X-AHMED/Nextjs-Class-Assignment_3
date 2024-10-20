import React from 'react';
import Link from 'next/link';


const Header = () => {
  return (
   <header className="bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 h-9">
    <nav className="container mx-auto flex justify-between items-center">
        <h1>Hasnain Ahmed</h1>
        <ul className="flex space-x-4">
            <li className="text-white my-1  hover:text-blue-500 ">
                <Link href='about'target='blank' >About Me</Link>
            </li>
            <li className="text-white my-1 hover:text-blue-500">
                <Link href='contact' target='blank'>ContactAs</Link>
            </li>
          
        </ul>
    </nav>
   </header>
)}

export default Header
