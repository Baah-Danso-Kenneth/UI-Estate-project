import React, { useEffect } from 'react';
import "./Listing.css";
import {FaBed} from 'react-icons/fa'
import {MdPool} from 'react-icons/md'
import { AiOutlineWifi } from 'react-icons/ai';
import {MdFastfood} from 'react-icons/md'

import Prop1 from '../../Assets/house1.jpg';
import Prop2 from '../../Assets/house2.jpg';
import Prop3 from '../../Assets/house3.jpg';
import Prop4 from '../../Assets/house4.jpg';

import Aos from 'aos';
import 'aos/dist/aos.css';



function Listing() {
   useEffect(()=>{Aos.init({duration:2000})},[])

    const properties = [
        {
            id:1,
            image:Prop1,
            name:"Countryside Estate, Italy",
            price: "3,455",
            desc: "A luxirious Balinese villa surrounded by lush gardens",
            beds: 8,
        },

        {
            id:2,
            image:Prop2,
            name:"Countryside Estate, Italy",
            price: "3,455",
            desc: "A luxirious Balinese villa surrounded by lush gardens",
            beds: 8,
        },


        {
            id:3,
            image:Prop3,
            name:"Countryside Estate, Italy",
            price: "3,455",
            desc: "A luxirious Balinese villa surrounded by lush gardens",
            beds: 8,
        },


        {
            id:4,
            image:Prop4,
            name:"Countryside Estate, Italy",
            price: "3,455",
            desc: "A luxirious Balinese villa surrounded by lush gardens",
            beds: 8,
        },

        {
            id:5,
            image:Prop4,
            name:"Countryside Estate, Italy",
            price: "3,455",
            desc: "A luxirious Balinese villa surrounded by lush gardens",
            beds: 8,
        },


    ]
  return (
    <div className='listing container section'>
        <div className="secContainer">

            <div className="secHeader">
                <span className="orangeText">Our listing</span>
                <h1 data-aos='fade-up' className="title">Buy and sell your asset <span className='orangeDot'>.</span></h1>
                <p data-aos='fade-up'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore culpa cum accusamus non, nihil maiores.</p>

                <div data-aos='fade-up' className="btns flex">
                    <button className="btn active">Exclusive</button>
                    <button className="btn ">standard</button>

                </div>

            </div>

            <div className="secContent grid">
                    {properties.map(({image,id,desc,price,beds,name})=>{
                        return(
                            <div key={id} className="singleListing">
                            <div data-aos='fade-down' className="imgDiv">
                                <img src={image} alt="house image" />
                            </div>
                            <div data-aos='fade-up'className="info">
                                <h2 className="name">{name}</h2>
                                <span className="price">
                                    <span className="digits">{price}</span>
                                    <span className="orangeText">USD</span>
                                    <span className="duration">/Day</span>
                                </span>
                                <p>{desc}</p>
                                <div className="ammenities flex">
                                    <span className='flex'>
                                        <FaBed className='icon'/>
                                        <blockquote>x{beds}</blockquote>
                                    </span>
        
                                    <span className='flex'>
                                        <MdPool className='icon'/>
                                    </span>
        
                                    <span className='flex'>
                                        <AiOutlineWifi className='icon'/>
                                    </span>
        
                                    <span className='flex'>
                                        <MdFastfood className='icon'/>
                                    </span>
                                </div>
                            </div>
                        </div>
                        )
                    })}

            </div>
        </div>
    </div>
  )
}

export default Listing