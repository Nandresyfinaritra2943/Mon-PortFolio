import React from 'react';
import ProjetCarte from './ProjectAnimer';

// Importez toutes les images nécessaires pour vos projets
import projet1_1 from '../../assets/iconLangage/java-script (1).png';
import projet1_2 from '../../assets/iconLangage/bootstrap.png';
import projet1_3 from '../../assets/iconLangage/css-3.png';
import projet1_4 from '../../assets/iconLangage/html-5.png';
import projet1_5 from '../../assets/iconLangage/library.png';

import projet2_1 from '../../assets/iconLangage/java (2).png';
import projet2_2 from '../../assets/iconLangage/letter-c.png';
import projet2_3 from '../../assets/iconLangage/c-sharp (2).png';
import projet2_4 from '../../assets/iconLangage/c- (2).png';
import projet2_5 from '../../assets/iconLangage/php (1).png';

import projet3_1 from '../../assets/iconLangage/mysql (1).png';
import projet3_2 from '../../assets/iconLangage/postgresql.png';


function Competence() {
  const projets = [
    {
      id: 1,
      title: "Technologie FRONTEND",
      images: [projet1_1, projet1_2, projet1_3, projet1_4, projet1_5],
      description: "HTML5, CSS3, Bootstrap, React JS, Tailwind CSS .",
    },
    {
      id: 2,
      title: "Technologie BACKEND",
      images: [projet2_1, projet2_2, projet2_3, projet2_4, projet2_5],
      description: "Langage C, C++, C#, JAVA, PHP .",
    },
    {
      id: 3,
      title: "Systeme de Gestion de Base de Donnee",
      images: [projet3_1, projet3_2], // Un projet peut n'avoir qu'une seule image
      description: "SQLite, Mysql, PostgreSql .",
    },
    // Ajoutez d'autres projets
  ];

  return (
    <section id="competence" className="py-10 bg-gray-100 min-h-screen">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">MES COMPETENCES</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projets.map((projet) => (
          <ProjetCarte key={projet.id} projet={projet} />
        ))}
      </div>
    </section>
  );
};

export default Competence;
