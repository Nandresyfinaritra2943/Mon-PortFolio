import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-4 py-2 bg-gray-100 text-gray-400 shadow-md sticky top-0 z-50">
      
      {/* Logo ou nom */}
      <button className='bg-slate-500 py-2 px-4 rounded-lg text-xl text-white font-semibold'>
        <p>F</p>
      </button>
    
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </button>

      {/* Menu pour grand écran et menu mobile en superposition */}
      <nav className={`md:flex ${isOpen ? 'block' : 'hidden'}  absolute  md:static top-16 left-0 w-full md:w-auto bg-gray-200 md:bg-transparent p-4 md:p-0`}>
         <ul className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
           <li><a href="#intro" className="hover:text-white">A propos</a></li>
           <li><a href="#competence" className="hover:text-white">Competences</a></li>
           <li><a href="#projets" className="hover:text-white">Projets</a></li>
           <li><a href="#contact" className="hover:text-white">Contact</a></li>
         </ul>
       </nav>
    </header>
  );
};

export default Header;
















// import React, { useState } from 'react';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="flex justify-between items-center p-1 bg-gray-100  text-gray-400">

//       <button className='bg-slate-500 py-4 px-6 rounded-lg text-3xl mb-5 text-white font-semibold'>
//         <p>F</p>
//       </button>
      
//       {/* Menu Hamburger pour mobile */}
//       <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
//       </button>

//       {/* Menu pour grand écran */}
//       <nav className={`md:flex ${isOpen ? 'block' : 'hidden'}  absolute  md:static top-16 left-0 w-full md:w-auto bg-gray-200 md:bg-transparent p-4 md:p-0`}>
//         <ul className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
//           <li><a href="#competence" className="hover:text-white">Competences</a></li>
//           <li><a href="#projets" className="hover:text-white">Projets</a></li>
//           <li><a href="#contact" className="hover:text-white">Contact</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;