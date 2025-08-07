import React from 'react';
import ProjetCarte from './ProjectAnimer';

// Importez toutes les images nécessaires pour vos projets
import projet1_1 from '../../assets/Capture Acceuil JS.png';
import projet1_2 from '../../assets/Capture Aceuil js.png';
import projet1_3 from '../../assets/Delta JS.png';
import projet1_4 from '../../assets/SecondDegreJs.png';
import projet1_5 from '../../assets/PanneauJS.png';

import projet2_1 from '../../assets/AcceuilHTML.png';
import projet2_2 from '../../assets/DashHTML.png';
import projet2_3 from '../../assets/DestinatHTML.png';
import projet2_4 from '../../assets/VolHTML.png';
import projet2_5 from '../../assets/ConnexionHTML.png';
import projet2_6 from '../../assets/AfricHTML.png';

import projet3_1 from '../../assets/saryJava/principal.png';
import projet3_2 from '../../assets/saryJava/connexion.png';
import projet3_3 from '../../assets/saryJava/prof.png';
import projet3_4 from '../../assets/saryJava/salle.png';
import projet3_5 from '../../assets/saryJava/edt.png';
import projet3_6 from '../../assets/saryJava/edtmod.png';

import projet4_1 from '../../assets/capturePortfolio/a.png';
import projet4_2 from '../../assets/capturePortfolio/b.png';
import projet4_3 from '../../assets/capturePortfolio/c.png';
import projet4_4 from '../../assets/capturePortfolio/d.png';
import projet4_5 from '../../assets/capturePortfolio/e.png';
import projet4_6 from '../../assets/capturePortfolio/f.png';
import projet4_7 from '../../assets/capturePortfolio/g.png';
import projet4_8 from '../../assets/capturePortfolio/h.png';

import projet5_1 from '../../assets/Screen Projet/phptarif.png';
import projet5_2 from '../../assets/Screen Projet/phppersonne.png';
import projet5_3 from '../../assets/Screen Projet/phphisto.png';
import projet5_4 from '../../assets/Screen Projet/phpfacture.png';
import projet5_5 from '../../assets/Screen Projet/phpajout.png';

import projet6_1 from '../../assets/Screen Projet/vuebilan.png';
import projet6_2 from '../../assets/Screen Projet/vuehisto.png';
import projet6_3 from '../../assets/Screen Projet/vuelogin.png';


function Projet() {
  const projets = [
    {
      id: 1,
      title: "Projet L1 Javascript",
      images: [projet1_1, projet1_2, projet1_3, projet1_4, projet1_5],
      description: "Application web pour resolution d'equation de second degre, calcule de circuit analogique et affichage de panneau publicitaire.",
    },
    {
      id: 2,
      title: "Projet L1 HTML5, CSS3",
      images: [projet2_1, projet2_2, projet2_3, projet2_4, projet2_5, projet2_6],
      description: "Maquette pour site web de reservation de voyage .",
    },
    {
      id: 3,
      title: "Projet JAVA",
      images: [projet3_1, projet3_2, projet3_3, projet3_4, projet3_5, projet3_6], // Un projet peut n'avoir qu'une seule image
      description: "Application Desktop pour la gestion d'emploie du temp des professeurs .",
    },
    {
      id: 4,
      title: "Projet Portfolio",
      images: [projet4_1, projet4_2, projet4_3, projet4_4, projet4_5, projet4_6, projet4_7, projet4_8], // Un projet peut n'avoir qu'une seule image
      description: "site web de mon portFolio realiser avec react JS et Tailwind CSS . ",
    },
    {
      id: 5,
      title: "Projet PHP",
      images: [projet5_1, projet5_2, projet5_3, projet5_4, projet5_5], // Un projet peut n'avoir qu'une seule image
      description: "Gestion des Pensions des personnes (Veuve/Retraiter) . ",
    },
    {
      id: 6,
      title: "Projet React JS et Laravel",
      images: [projet6_1, projet6_2, projet6_3], // Un projet peut n'avoir qu'une seule image
      description: "Application de gestion des Produits . ",
    },

  ];

  return (
    <section id="projets" className="py-10 bg-gray-100 min-h-screen">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">MES PROJETS</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projets.map((projet) => (
          <ProjetCarte key={projet.id} projet={projet} />
        ))}
      </div>
    </section>
  );
};

export default Projet;




































// import React from 'react';
// import projet1 from '../../assets/sarytest.png';
// import projet2 from '../../assets/sarytest.png';
// import projet3 from '../../assets/sarytest.png';

// const Projects = () => {
//   const projets = [
//     { id: 1, title: "Projet 1", image: projet1, description: "Description de mon premier projet..." },
//     { id: 2, title: "Projet 2", image: projet2, description: "Description de mon deuxième projet..." },
//     { id: 3, title: "Projet 3", image: projet3, description: "Description de mon troisième projet..." },
//     { id: 4, title: "Projet 4", image: projet3, description: "Application web PHP pour la gestion de Pension" },
//     // Ajoutez d'autres projets ici
//   ];

//   return (
//     <section id="projets" className="py-10">
//       <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">MES PROJETS</h2>
//       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//         {projets.map((projet) => (
//           <div key={projet.id} className="bg-white p-4 shadow-md rounded-lg transform transition duration-500 hover:scale-105">
//             <img 
//               src={projet.image} 
//               alt={`Image de ${projet.title}`} 
//               className="w-full h-48 object-cover rounded-md mb-4" 
//             />
//             <h3 className="font-semibold text-xl mb-2">{projet.title}</h3>
//             <p className="text-gray-600">{projet.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;












// import React from "react";

// function Projet() {
//     return (
//         <section id="projets" className="py-10">
//             <h2 className="text-2xl font-bold text-center mb-6">MES PROJETS</h2>
//             <div className="container mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//                 {/* Ici, on itérerait sur une liste de projets */}
//                 <div className="bg-white p-4 shadow-md rounded-lg">
//                 <h3 className="font-semibold">Capture d'écran</h3>
//                 <p>Description du projet...</p>
//                 </div>
//                 {/* ... autres projets */}
//                 <div className="bg-white p-4 shadow-md rounded-lg">
//                 <h3 className="font-semibold">Capture d'écran</h3>
//                 <p>Description du projet...</p>
//                 </div>
//                 <div className="bg-white p-4 shadow-md rounded-lg">
//                 <h3 className="font-semibold">Capture d'écran</h3>
//                 <p>Description du projet...</p>
//                 </div>
//                 <div className="bg-white p-4 shadow-md rounded-lg">
//                 <h3 className="font-semibold">Capture d'écran</h3>
//                 <p>Description du projet...</p>
//                 </div>
//                 <div className="bg-white p-4 shadow-md rounded-lg">
//                 <h3 className="font-semibold">Capture d'écran</h3>
//                 <p>Description du projet...</p>
//                 </div>
//             </div>
//         </section>
//     )
// }
// export default Projet