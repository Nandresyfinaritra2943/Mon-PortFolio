import './App.css'
import Competence from './assets/components/competence'

import Contact from './assets/components/contact'
import Footer from './assets/components/footer'
import Header from './assets/components/header'
import Intro from './assets/components/intro'
import Projet from './assets/components/projet'
import ParticuleBody from './particlebody'

function App() {

  return (
    <>
<<<<<<< HEAD
=======

>>>>>>> cb3e42e (feat)
      <ParticuleBody />
      <div className='relative'>
        
         <Header />
        <main className="container mx-auto p-4 z-10">
<<<<<<< HEAD
          <div className='bg-white bg-opacity-50'>
            <section id='intro'>
              <Intro />
            </section>
            
          </div>
          <div className='bg-white bg-opacity-50'>
            <section id='competence'>
              <Competence />
            </section>
            
          </div>
          <div className='bg-white bg-opacity-50'>
            <section id='projets'>
              <Projet />
            </section>
            
          </div>
          <div className='bg-white bg-opacity-50'>
            <section id='contact'>
              <Contact />
            </section>
            
          </div>
          
          
          
=======

            <div >
                  {/* <marquee  direction="right"> <h1>Tongasoa eto @ Page ko ianareo !</h1> </marquee> */}
                  <div className=' p-3 rounded-lg' > {/* Optionnel: pour améliorer la lisibilité du texte sur l'image */}
                {' '}
                <marquee  direction="right"><span className="inline-block animate-[color-change_5s_infinite_alternate] animate-[bounce-slow_3s_infinite_ease-in-out]">Bienvenue sur mon Port Folio !</span></marquee> 
              </div>
              <section id='intro'>
                <Intro />
              </section>  
            </div>

            <div className=''>
              <section id='competence'>
                <Competence />
              </section>
            </div>

            <div className=''>
              <section id='projets'>
                <Projet />
              </section>
            </div>

            <div className=''>
              <section id='contact'>
                <Contact />
              </section>
            </div>
>>>>>>> cb3e42e (feat)
          
            <div>
              <Footer />
            </div>

        </main>
      </div>

    </>
  )
}

export default App