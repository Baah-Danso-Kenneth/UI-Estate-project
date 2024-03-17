import React,{useEffect} from 'react'
import './Footer.css';

import {SiTreehouse} from 'react-icons/si'
import {ImFacebook} from 'react-icons/im'
import {BsTwitter} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'

import Aos from 'aos'
import 'aos/dist/aos.css';

function Footer() {

  useEffect(()=>{
    Aos.init({duration:2000})
},[])

  return (
    <div className='footer'>
      <div className="secContainer container grid">
        <div data-aos='fade-up' className="logoDiv">
          <div className="footerLogo">
            <SiTreehouse/>
            <h4>Baka</h4>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil molestias dicta aut. Sunt, eum quos!</p>
          <div className="socials flex">
            <ImFacebook className='icon'/>
            <BsTwitter className='icon'/>
            <AiFillInstagram className='icon'/>
          </div>
        </div>

        <div data-aos='fade-up' className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="">Home</a>
          </li>

          <li>
            <a href="">Explore</a>
          </li>

          <li>
            <a href="">Travel</a>
          </li>

          <li>
            <a href="">Blog</a>
          </li>

        </div>

        <div data-aos='fade-up' className="footerLinks">
          <span className="linkTitle">Helpful Links</span>
          <li>
            <a href="">Destination</a>
          </li>

          <li>
            <a href="">Travel & Condition</a>
          </li>

          <li>
            <a href="">Support</a>
          </li>

          <li>
            <a href="">Privacy</a>
          </li>
        </div>

        <div data-aos='fade-up' className="footerLinks">
          <span className="linkTitle">Contact Details</span>
          <span className="phone">+233 8056912</span>
          <span className="email">highest@gmail.com</span>
          <span className="website">wwww.geesman.org</span>
        </div>

      </div>
    </div>
  )
}

export default Footer
