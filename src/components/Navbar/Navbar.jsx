import React, { useState } from 'react'
import "./Navbar.css";
import {SiTreehouse} from 'react-icons/si'
import {AiFillCloseCircle} from 'react-icons/ai'
import {PiDotsNineBold} from 'react-icons/pi'

function Navbar() {
    const [menu, setMenu] = useState("menu");
    const [transparent, setTransparent]=useState("Navbar")

    const addBg=()=>{
        if(window.scrollY >= 10){
            setTransparent('Navbar addBackground')
        }else{
            setTransparent("Navbar");
        }
    }
    window.addEventListener("scroll", addBg)

    const shownavbar=()=>{
        setMenu("showNavbar menu")
    }

    const removenavbar=()=>{
        setMenu(" menu")
    }


  return (
    <div className={transparent}>
        <div className="logoDiv">
            <SiTreehouse className='icon'/>
            <span>Baka</span>
        </div>
          

            <div className={menu}>
                <ul>
                    <li className="navlist">Property</li>
                    <li className="navlist">Services</li>
                    <li className="navlist">Product</li>
                    <li className="navlist">About us</li>
                </ul>
                <AiFillCloseCircle className='closeIcon icon' onClick={removenavbar}/>
            </div>

       <button className='contactBtn btn'> Contact </button>
       <PiDotsNineBold className='menuIcon icon' onClick={shownavbar}/>
    </div>
  )
}

export default Navbar