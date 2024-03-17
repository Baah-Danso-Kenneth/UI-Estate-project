import './App.css'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Hello from './components/Hello/Hello'
import Sponsors from './components/Sponsors/Sponsors'
import Popular from './components/Popular/Popular'
import Listing from './components/Listing/Listing'
import Contact from './components/Contact/Contact';
import Subscribe from './components/Subscribe/Subscribe'
import Footer from './components/Footer/Footer'


function App() {  
  return (
    <>
     <Navbar/>
     <Hello/>
     <Sponsors/>
     <Popular/>
     <Listing/>
      <About/>
      <Contact/>
      <Subscribe/>
      <Footer/>
     </>
  )
}

export default App
