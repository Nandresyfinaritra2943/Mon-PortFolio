import React from 'react';
import monImage from '../../assets/sary.jpeg'
import '../../App.css'

function Intro () {
  return (
    <>
      {/* Styles d'animation CSS */}
      <style>
        {`
          @keyframes color-change {
            0% { color: #3b82f6; } /* blue-500 */
            25% { color: #f97316; } /* orange-500 */
            50% { color: #ef4444; } /* red-500 */
            75% { color: #22c55e; } /* green-500 */
            100% { color: #3b82f6; }
          }
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
        `}
      </style>

      <section id='intro' className="bg-gray-100 text-center py-10 md:py-5 ">

        <div className=' p-3 rounded-lg' > {/* Optionnel: pour améliorer la lisibilité du texte sur l'image */}
          {' '}
          <span className="inline-block animate-[color-change_5s_infinite_alternate] animate-[bounce-slow_3s_infinite_ease-in-out]">Bienvenue sur mon site web !</span>
        </div>

        <div className="w-32 h-32 md:w-64 md:h-64 mx-auto mb-4 overflow-hidden rounded-full shadow-lg">
          <img src={monImage} alt="Mon image de profil" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold" id='desc_head2'>
          {' '}
          <span className="inline-block animate-[color-change_5s_infinite_alternate] animate-[bounce-slow_3s_infinite_ease-in-out]">Je suis Nandresy</span>
        </h1>
        <div className='bg-white bg-opacity-50 p-8 rounded-lg'> {/* Optionnel: pour améliorer la lisibilité du texte sur l'image */}
          <p className='text-md text-slate-600 text-center'> Je m'appelle <span className="inline-block animate-[color-change_5s_infinite_alternate] animate-[bounce-slow_3s_infinite_ease-in-out]"> RAZAFIMAHEFA Nandresy Finaritra </span>, developpeur web Full Stack Passionne par les technologies frontend moderne notamment React JS et les technologies backend comme PHP Laravel. J'aime transformer des idees en projet concret avec du code. Mon Objectif est de developper des applications interactive pour faciliter le quotidien. </p>
        </div>
      </section>
    </>
  );
};

export default Intro;




// import React from "react";

// function Intro() {
//     return (
//         <section className="text-center py-10 md:py-20">
//             <div className="rounded-full w-40 h-40 mx-auto bg-gray-300 mb-4 flex items-center justify-center">
//                 <span className="text-xl">Mon Image</span>
//             </div>
//             <h1 className="text-3xl font-bold">Je suis Nandresy</h1>
//         </section>
//     )
// }
// export default Intro