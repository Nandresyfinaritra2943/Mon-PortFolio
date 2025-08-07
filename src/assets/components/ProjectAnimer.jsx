import React, {useState, useEffect} from "react";

function ProjetCarte ({ projet }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect (() => {
        if ( projet.images.length > 1 )
        {
            const intervalId = setInterval(() => {
            // On passe à l'image suivante, en revenant à la première si on est à la fin du tableau
                setCurrentImageIndex((prevIndex) => 
                (prevIndex + 1) % projet.images.length
                );
            }, 2000); // 2000 ms = 2 secondes

            // La fonction de nettoyage de l'effet
            return () => clearInterval(intervalId);
        }
    },[projet.images.length]);

    return (
        <div className="bg-white p-4 shadow-md rounded-lg transform transition duration-500 hover:scale-105">
            <div className="w-full h-48 overflow-hidden rounded-md mb-4">
                <img 
                    src={projet.images[currentImageIndex]} 
                    alt={`Image de ${projet.title}`} 
                    className="w-full h-full object-cover transition-opacity duration-4000 ease-in-out" 
                />
            </div>
            <h3 className="font-semibold text-xl mb-2 bg-slate-200">{projet.title}</h3>
            <p className="text-gray-600">{projet.description}</p>
        </div>
    )
}
export default ProjetCarte