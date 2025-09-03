import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="flex justify-between items-center px-4 py-2 bg-gray-100/90 text-gray-400 shadow-md sticky top-0 z-50">
      
      {/* Logo ou nom */}
      <button className='py-2 px-4 bg-slate-500 rounded-lg text-xl text-white font-semibold'>
        <p>F</p>
      </button>
      
      {/* Bouton pour le menu mobile */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-30">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      {/* Menu pour les grands écrans */}
      <nav className="hidden md:block">
        <ul className="flex space-x-4">
          <li><Link to="intro" spy={true} smooth={true} duration={1500} className="transition-shadow hover:text-white cursor-pointer">À propos</Link></li>
          <li><Link to="competence" spy={true} smooth={true} duration={1500} className="transition-shadow hover:text-white cursor-pointer">Compétences</Link></li>
          <li><Link to="projets" spy={true} smooth={true} duration={1500} className="transition-shadow hover:text-white cursor-pointer">Projets</Link></li>
          <li><Link to="contact" spy={true} smooth={true} duration={1500} className="transition-shadow hover:text-white cursor-pointer">Contact</Link></li>
        </ul>
      </nav>

      {/* Menu mobile en superposition */}
      <nav className={`
        md:hidden ${isOpen ? 'block' : 'hidden'}
        absolute top-16 left-0 w-full bg-gray-200 p-4 z-20
      `}>
        <ul className="flex flex-col space-y-2">
          <li><Link to="intro" spy={true} smooth={true} duration={5500} onClick={closeMenu} className="transition-shadow hover:text-white cursor-pointer">À propos</Link></li>
          <li><Link to="competence" spy={true} smooth={true} duration={5500} onClick={closeMenu} className="transition-shadow hover:text-white cursor-pointer">Compétences</Link></li>
          <li><Link to="projets" spy={true} smooth={true} duration={5500} onClick={closeMenu} className="transition-shadow hover:text-white cursor-pointer">Projets</Link></li>
          <li><Link to="contact" spy={true} smooth={true} duration={5500} onClick={closeMenu} className="transition-shadow hover:text-white cursor-pointer">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;