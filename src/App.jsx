import './App.css'
import Competence from './assets/components/competence'

import Contact from './assets/components/contact'
import Header from './assets/components/header'
import Intro from './assets/components/intro'
import Projet from './assets/components/projet'

function App() {

  return (
    <>
      <div className='relative'>
        
         <Header />
        <main className="container mx-auto p-4 z-10">
          <div className='bg-white bg-opacity-50'>
            <Intro />
          </div>
          <div className='bg-white bg-opacity-50'>
            <Competence />
          </div>
          <div className='bg-white bg-opacity-50'>
            <Projet />
          </div>
          <div className='bg-white bg-opacity-50'>
            <Contact />
          </div>
          
          
          
          
        </main>
      </div>

    </>
  )
}

export default App

{/* <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto p-4">
        <Hero />
        <Projects />
        <Contact />
      </main>
    </div> */}