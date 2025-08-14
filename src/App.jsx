import './App.css'
import Competence from './assets/components/competence'

import Contact from './assets/components/contact'
import Header from './assets/components/header'
import Intro from './assets/components/intro'
import Projet from './assets/components/projet'
import ParticuleBody from './particlebody'

function App() {

  return (
    <>
      <ParticuleBody />
      <div className='relative'>
        
         <Header />
        <main className="container mx-auto p-4 z-10">
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
          
          
          
          
        </main>
      </div>

    </>
  )
}

export default App