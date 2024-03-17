import React, { useEffect } from 'react'
import {BiLeftArrowAlt} from 'react-icons/bi'
import {BiRightArrowAlt} from 'react-icons/bi'
import './Popular.css';

import House1 from '../../Assets/house1.jpg'
import House2 from '../../Assets/house2.jpg'
import House3 from '../../Assets/house3.jpg'
import House4 from '../../Assets/house4.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'; 

function Popular() {
    useEffect(()=>{Aos.init({duration:2000})},[])

  return (
    <div className='popular container section'>
        <div className="secContainer">
            <div className="secHeader flex">
                <div className="textDiv">
                    <span data-aos='fade-down'className="orangeText">Best choices</span>
                    <h1 data-aos='fade-down' className='title'>Popular Residences <span className='orangeDot'>.</span></h1>
                </div>
            

            <div data-aos='fade-down' className="icons flex">
                <BiLeftArrowAlt className='icon'/>
                <BiRightArrowAlt className='icon'/>
            </div>
            </div>
         
            <div className="secContent grid">
                <div  data-aos='fade-down' className="singleProperty">
                    <div className="imgDiv">
                        <img src={House1} alt='houses'/>
                    </div>
                    <div className="info">
                        <span className="price">
                            <span className="orangeText">$</span>
                            <span className="digits">48,885</span>
                        </span>
                        <h2 className="name">Alivia Prica Jarfin</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor et adipisci modi nisi culpa perspiciatis tempora praesentium a obcaecati cupiditate accusamus asperiores cumque magnam, ducimus dolorem voluptatum nesciunt dolorum sint.</p>
                    </div>
                </div>


                <div data-aos='fade-down' className="singleProperty">
                    <div className="imgDiv">
                        <img src={House2} alt='houses'/>
                    </div>
                    <div data-aos='fade-up'className="info">
                        <span className="price">
                            <span className="orangeText">$</span>
                            <span className="digits">48,885</span>
                        </span>
                        <h2 className="name">Alivia Prica Jarfin</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor et adipisci modi nisi culpa perspiciatis tempora praesentium a obcaecati cupiditate accusamus asperiores cumque magnam, ducimus dolorem voluptatum nesciunt dolorum sint.</p>
                    </div>
                </div>


                <div data-aos='fade-down' className="singleProperty">
                    <div className="imgDiv">
                        <img src={House3} alt='houses'/>
                    </div>
                    <div data-aos='fade-up'className="info">
                        <span className="price">
                            <span className="orangeText">$</span>
                            <span className="digits">48,885</span>
                        </span>
                        <h2 className="name">Alivia Prica Jarfin</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor et adipisci modi nisi culpa perspiciatis tempora praesentium a obcaecati cupiditate accusamus asperiores cumque magnam, ducimus dolorem voluptatum nesciunt dolorum sint.</p>
                    </div>
                </div>


                <div data-aos='fade-down'className="singleProperty">
                    <div className="imgDiv">
                        <img src={House4} alt='houses'/>
                    </div>
                    <div data-aos='fade-up'className="info">
                        <span className="price">
                            <span className="orangeText">$</span>
                            <span className="digits">48,885</span>
                        </span>
                        <h2 className="name">Alivia Prica Jarfin</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor et adipisci modi nisi culpa perspiciatis tempora praesentium a obcaecati cupiditate accusamus asperiores cumque magnam, ducimus dolorem voluptatum nesciunt dolorum sint.</p>
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Popular