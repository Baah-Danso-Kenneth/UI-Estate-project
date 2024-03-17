import React,{useEffect} from 'react'
import './Subscribe.css';

import Aos from 'aos'
import 'aos/dist/aos.css';

function Subscribe() {

  useEffect(()=>{
    Aos.init({duration:2000})
},[])

  return (
    <div className='subscribe section container'>
        <div className="secContent">
            <h1 data-aos='fade-up'>get started with baka</h1>
            <p data-aos='fade-up'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, voluptates qui? Similique quod blanditiis cum? Animi veritatis reiciendis sint suscipit?</p>
            <button data-aos='fade-up' className='btn'>get started</button>
        </div>

        </div>
  )
}

export default Subscribe