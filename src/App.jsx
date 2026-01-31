import { IconContext } from 'react-icons'
import './App.scss'
import Hero from './components/header/hero/Hero'
import Navbar from './components/header/Navbar/Navbar'
import Chose from './components/main/whychose/Chose'
import Materials from './components/main/mainmaterials/materials'
import About from './components/main/about/About'
import Question from './components/main/question/Question'
import Delivery from './components/main/delivery/Delivery'





function App() {


  return (
    <div>
      <Navbar/>
      <Hero/>
      <IconContext.Provider value={{size: "20px"}}>
        <Chose/>
      </IconContext.Provider>
      <Materials/>
      <About/>
      <Question/>
      <Delivery/>
    </div>
      
    
    
  )
}

export default App
