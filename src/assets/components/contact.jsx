import React from "react";

import fb from "../../assets/iconcontact/facebook_48px.png";
import mail from "../../assets/iconcontact/gmail_logo_48px.png";
import linkdin from "../../assets/iconcontact/linkedin_circled_48px.png";
import watsapp from "../../assets/iconcontact/whatsapp_48px.png";
import github from "../../assets/iconcontact/github.png";

function Contact() {

    // const [nom, setNom] = useState('');
    // const [email, setEmail] = useState('');
    // const [message, setMessage] = useState('');
    // const [status, setStatus] = useState('');

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     setStatus('Envoi en cours...');

  //     try {
  //       const response = await axios.post('http://127.0.0.1:8000/api/contact', {
  //         nom,
  //         email,
  //         message,
  //       });

  //       setStatus(response.data.message);
  //       setNom('');
  //       setEmail('');
  //       setMessage('');
  //     } catch (error) {
  //       setStatus('Erreur lors de l\'envoi du message.');
  //     }
  // };

    return (
        <section id="contact" className="py-10 bg-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">ME CONTACTER</h2>
      
          {/* <div className="flex bg-white bg-opacity-50 p-2 rounded-lg">
            <div className="w-12 h-12 md:w-23 md:h-23 mx-auto mb-4 overflow-hidden rounded-full shadow-lg">
              <a href="https://www.facebook.com/mandresy.rz.2025" target="_blank" rel="noopener noreferrer">
                <img src={fb} alt="Mon image de profil" className="w-full h-full object-cover" />
              </a>
            </div>
            <div className="w-12 h-12 md:w-23 md:h-23 mx-auto mb-4 overflow-hidden rounded-full shadow-lg">
                <a href="mailto:jeneranandresy@gmail.com" target="_blank" rel="noopener noreferrer" >
                  <img src={mail} alt="Mon image de profil" className="w-full h-full object-cover" />
                </a>
            </div>
            <div className="w-12 h-12 md:w-23 md:h-23 mx-auto mb-4 overflow-hidden rounded-full shadow-lg">
                <a href="https://www.linkedin.com/in/nandresy-finaritra-65b756353" target="_blank"  > 
                  <img src={linkdin} alt="Mon image de profil" className="w-full h-full object-cover" /> 
                </a>
            </div>
            <div className="w-12 h-12 md:w-23 md:h-23 mx-auto mb-4 overflow-hidden rounded-full shadow-lg">
                <a href="https://wa.me/261387330627" target="_blank" > 
                  <img src={watsapp} alt="Mon image de profil" className="w-full h-full object-cover" /> 
                </a>
            </div>
           
            <div className="w-12 h-12 md:w-23 md:h-23 mx-auto mb-4 overflow-hidden rounded-full shadow-lg text-black">
              <a href="https://github.com/Nandresyfinaritra2943" target="_blank" > 
                <img src={github} alt="Mon image de profil" className="w-full h-full object-cover" /> 
              </a>
            </div>
        
          </div> */}

          <div className="flex flex-wrap justify-center md:justify-around p-4">
          
            <div className="flex flex-col items-center p-2 m-2">
              <a href="https://www.facebook.com/mandresy.rz.2025" target="_blank" rel="noopener noreferrer">
                <img src={fb} alt="Facebook" className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-full shadow-lg" />
              </a>
              <p className="mt-2 text-xs md:text-sm text-gray-800 font-semibold">Mandresy RZ</p>
            </div>
            <div className="flex flex-col items-center p-2 m-2">
              <a href="mailto:jeneranandresy@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src={mail} alt="Mon image de profil" className="w-full h-full object-cover" />
              </a>
              <p className="mt-2 text-xs md:text-sm text-gray-800 font-semibold">jeneranandresy@gmail.com</p>
            </div>
            <div className="flex flex-col items-center p-2 m-2">
              <a href="https://www.linkedin.com/in/nandresy-finaritra-65b756353" target="_blank"  > 
                <img src={linkdin} alt="Mon image de profil" className="w-full h-full object-cover" /> 
              </a>
              <p className="mt-2 text-xs md:text-sm text-gray-800 font-semibold">Linkedin</p>
            </div>
            <div className="flex flex-col items-center p-2 m-2">
              <a href="https://wa.me/261387330627" target="_blank" > 
                  <img src={watsapp} alt="Mon image de profil" className="w-full h-full object-cover" /> 
                </a>
              <p className="mt-2 text-xs md:text-sm text-gray-800 font-semibold">+261 38 73 306 27</p>
            </div>
            <div className="flex flex-col items-center p-2 m-2">
              <a href="https://github.com/Nandresyfinaritra2943" target="_blank" > 
                <img src={github} alt="Mon image de profil" className="w-full h-full object-cover" /> 
              </a>
              <p className="mt-2 text-xs md:text-sm text-gray-800 font-semibold">Nandresyfinaritra2943</p>
            </div>
          </div>

          
          <form  className="max-w-md mx-auto p-6">

            <div className="relative mb-6">
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 pt-6 pb-2 text-lg text-gray-800 bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 peer"
                placeholder=" " // Important pour l'effet de placeholder
              />
              <label 
                htmlFor="name" 
                className="absolute left-4 top-2 text-gray-600 transition-all duration-300 transform -translate-y-1/2 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-sm peer-focus:-translate-y-1/2"
              >
                Nom
              </label>
            </div>

            {/* Champ Email */}
            <div className="relative mb-6">
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 pt-6 pb-2 text-lg text-gray-800 bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 peer"
                placeholder=" "
              />
              <label 
                htmlFor="email" 
                className="absolute left-4 top-2 text-gray-600 transition-all duration-300 transform -translate-y-1/2 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-sm peer-focus:-translate-y-1/2"
              >
                Email
              </label>
            </div>

            {/* Champ Message */}
            <div className="relative mb-6">
              <textarea 
                id="message" 
                rows="4" 
                className="w-full px-4 pt-6 pb-2 text-lg text-gray-800 bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 resize-none peer"
                placeholder=" "
              ></textarea>
              <label 
                htmlFor="message" 
                className="absolute left-4 top-2 text-gray-600 transition-all duration-300 transform -translate-y-1/2 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-sm peer-focus:-translate-y-1/2"
              >
                Message
              </label>
            </div>

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Envoyer</button>

          </form>
    </section>
    )
}
export default Contact