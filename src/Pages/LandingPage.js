import React, { useEffect} from 'react'
import SP from './SP.png'
import HIRE from './HIRE.gif'
import Header from '../Components/Header'
import {motion} from 'framer-motion'
import Footer from '../Components/Footer'
import { NavLink } from 'react-router-dom'
import AOS from 'aos'
import '../../node_modules/aos/dist/aos.css'
const LandingPage = () => {
  useEffect(()=>{
    AOS.init({duration:1000});
  },[]);
  return (
    <>
    <Header/>
    <div className='landing-page'>
    <div className='landing-page-1'>
    <motion.div className='landing-page-11' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:0.5}}>
      <h1>MERN</h1>
      <h1>DEVELOPER</h1>
    </motion.div>
    <motion.div className='landing-page-12'  initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1}}>
      <img src={SP} alt='SP'></img>
    </motion.div>
    </div>
    <div className='landing-page-2'>
    <motion.div className='landing-page-22'  initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1.5}}>
      <h2>SHIVANK PANDEY</h2>
      <div className='red-box'></div>
      <p>A Passionate MERN Developer Dedicated to Crafting Innovative Web Applications.With Expertise in MongoDb,ExpressJs,ReactJs and NodeJs.I Bring Ideas to Life Through Clean,Efficient and User-Centric Code.My Journey in Web Development Has Been Marked By a Commitment to Creating Seamless User Experiences and Robust Server Side Solutions</p>
      <button>Download RESUME</button>
    </motion.div>
    <div className='landing-page-23'>
      <motion.div className='landing-page-233'  initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:2}}>
        <motion.div className='landing-page-2333'  initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:2.5}}>
        <img src={HIRE} alt='HIRE NOW'></img>
        </motion.div>
      </motion.div>
    </div>
    </div>
    </div>
    <div className='intro'>
    <div className='intro-main' data-aos="zoom-in-down">
    <div className='intro-main-1'>
      <h2>Shivank Pandey</h2>
      <h2>THE</h2>
      <h2>INTRO</h2>
      <p>MERN Developer|Shaping The Digital Future</p>
      <p>Greetings!,I'm Your Partner in Creating Cutting-Edge Web Applications.I'm not Just a MERN Developer;I'm a Digital Architect Who Turns Concept into Remarkable Online Expireinece.MERN STACK is My Toolkit[MONGODB,EXPRESS,REACT,NODE] and I Weild it with Precision to Craft Wonders</p>
    </div>
    <div className='intro-main-2' data-aos="zoom-in">
      <NavLink to='/About'>About</NavLink>
      <NavLink to='/Skills'>Skills</NavLink>
      <NavLink to='/Contact'>Contact</NavLink>
      <p>FEEL FREE TO CONTACT</p>
      <p>AVAILABLE 24X7</p>
    </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default LandingPage