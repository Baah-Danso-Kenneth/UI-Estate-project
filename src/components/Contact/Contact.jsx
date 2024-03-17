import React,{useEffect} from 'react'
import './Contact.css'

import {BiSolidPhoneCall} from 'react-icons/bi'
import {AiFillMessage} from 'react-icons/ai'
import {BiSolidVideo} from 'react-icons/bi'
import {BiSolidMessageDetail} from 'react-icons/bi'

import Content from '../../Assets/navbar-img.png'

import Aos from 'aos'
import 'aos/dist/aos.css';

function Contact() {
  useEffect(()=>{Aos.init({duration:2000})},[]);

  return (
    <div className='contact container section'>
      <div className="secContainer flex">
        <div data-aos='fade-down'className="imgDiv">
          <img src={Content} alt='content-img'/>
        </div>

        <div className="textDiv">
          <div data-aos='fade-down' className="secHeader flex">
            <div className="secTitle">
              <span className="orangeText">Contact us</span>
              <h1>
                {""}
                Easy way to contact us
                <span className='orangeDot'>.</span>
              </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, mollitia?</p>
            </div>
          </div>
          <div className="secContent grid">
            <div data-aos='fade-up' className="phone active">
              <div className="info flex">
                <BiSolidPhoneCall className='icon'/>
                <span>
                  <h4>Phone Call</h4>
                  <p>24/7 Support</p>
                </span>
              </div>
              <button>phone call now</button>
            </div>

            <div data-aos='fade-up'className="chat">
              <div className="info flex">
                <AiFillMessage className='icon'/>
                <span>
                  <h4>Chat</h4>
                  <p>24/7 Support</p>
                </span>
              </div>
              <button>chat now</button>
            </div>

            <div data-aos='fade-up'className="video">
              <div className="info flex">
                <BiSolidVideo className='icon'/>
                <span>
                  <h4>Video Call</h4>
                  <p>24/7 Support</p>
                </span>
              </div>
              <button>video call now</button>
            </div>
            <div data-aos='fade-up'className="message">
              <div className="info flex">
                <BiSolidMessageDetail className='icon'/>
                <span>
                  <h4>Message</h4>
                  <p>24/7 Support</p>
                </span>
              </div>
              <button>message now</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact