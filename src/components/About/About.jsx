import React, { useEffect, useState } from 'react'
import './About.css'

import Accordion from './Accordion'
import Home from '../../Assets/navbar-img.png'

import Aos from 'aos'
import 'aos/dist/aos.css';


function About() {
  const [active, setActive] = useState("Proven Track Record")

  useEffect(()=>{Aos.init({duration:2000})},[]);

  return (
    <div className='about section container'>
      <div className="secContainer flex">
        <div data-aos='fade-up' className="imgDiv">
          <img src={Home} alt="about images"/>
        </div>
        <div className="textDiv">
          <div data-aos='fade-down' className="secHeader flex">
            <div className="secTitle">
              <span className="orangeText"> Our Values </span>
              <h1>Value we give you <span className='orangeDot'>.</span></h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus magnam ipsum architecto libero deserunt temporibus velit et molestias mollitia minima.</p>
            </div>
          </div>
          <div  data-aos='fade-down' className="accordion grid">
              <Accordion
               title="Proven Track Record"
               desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis rem voluptas inventore ipsa laborum repellendus hic a earum numquam dolores."
               active={active}
               setActive={setActive}
              />

              <Accordion
               title="Local market knowledge"
               desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis rem voluptas inventore ipsa laborum repellendus hic a earum numquam dolores."
               active={active}
               setActive={setActive}
              />


              <Accordion
               title="Ethical Practices"
               desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis rem voluptas inventore ipsa laborum repellendus hic a earum numquam dolores."
               active={active}
               setActive={setActive}
              />


              <Accordion
               title="Ranked groups"
               desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis rem voluptas inventore ipsa laborum repellendus hic a earum numquam dolores."
               active={active}
               setActive={setActive}
              />

          </div>
        </div>
      </div>
    </div>
  )
}

export default About