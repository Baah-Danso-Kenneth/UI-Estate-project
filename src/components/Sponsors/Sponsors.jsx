import React, { useEffect } from 'react'
import './Sponsors.css';

import logo1 from '../../Assets/sponsor1.png';
import logo2 from '../../Assets/sponsor2.png';
import logo3 from '../../Assets/sponsor3.png';
import logo4 from '../../Assets/sponsor4.png';

import Aos from 'aos';
import "aos/dist/aos.css";


function Sponsors() {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

  return (
    <div className='sponsors'>
        <div data-aos='fade-up' className="secContainer flex">
            <span>
                <img src={logo1} alt="LogoImage" />
            </span>

            <span>
                <img src={logo2} alt="LogoImage2" />
            </span>
            <span>
                <img src={logo3} alt="LogoImage3" />
            </span>
            <span>
                <img src={logo4} alt="LogoImage4" />
            </span>
        </div>
        </div>
  )
}

export default Sponsors