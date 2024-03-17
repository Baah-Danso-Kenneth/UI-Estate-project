import React, { useEffect } from 'react'
import {HiLocationMarker} from 'react-icons/hi'
import Image from '../../Assets/navbar-img.png'
import './Hello.css'

import Aos from 'aos'
import 'aos/dist/aos.css';



function Hello() {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[]);

  return (
    <div className='Hello'>
       <div className="secContainer container flex">
        <div className="textDiv">
            <h1 data-aos='fade-up'>Discover Most suitable property</h1>
            <span data-aos='fade-up' className="design"></span>
            <p data-aos='fade-up'>Find a variety of properties that suit you very easily, forget all difficulties in finding a residence for you</p>

            <div data-aos='fade-up' className="searchBar flex">
                <div className="inputBox flex">
                    <HiLocationMarker className='icon'/>
                    <input type="text" placeholder='search by location'/>
                </div>

                <button className='btn'>Search</button>
            </div>
            

            <div data-aos='fade-up' className="numbers flex">
                <div className="singleNumber">
                    <span>9k <blockquote>+</blockquote></span>
                    <small>Premium Product</small>
                </div>

                <div className="singleNumber">
                    <span>2k <blockquote>+</blockquote></span>
                    <small>Premium Product</small>
                </div>

                <div className="singleNumber">
                    <span>48k <blockquote>+</blockquote></span>
                    <small>Awards Winning</small>
                </div>
            </div>
        </div>
        <div data-aos='fade-up' className="imgDiv">
            <img src={Image} alt="alt-img"/>
        </div>
       </div>
    </div>
  )
}

export default Hello
