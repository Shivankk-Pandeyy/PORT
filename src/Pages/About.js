import React, { useEffect} from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import './Page.css'
import hire2 from './HIRE2.gif'
import hire3 from './HIRE3.gif'
import {motion} from 'framer-motion'
import AOS from 'aos'
import '../../node_modules/aos/dist/aos.css'
import a3 from './about3.gif'
const About = () => {
  useEffect(()=>{
    AOS.init({duration:1000});
  },[]);
  return (
    <>
    <Header/>
    <div className='about-1'>
    <motion.div className='about-11' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:0.5}}>
      <h2>ABOUT ME</h2>
    </motion.div>
    <motion.div className='about-12' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1.5}}>
      <img src={hire3} alt='HIRE ME'></img>
      <img src={hire2} alt='HIRE ME'></img>
    </motion.div>
    <motion.div className='about-13' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:2.2}}>
      <h2>Shivank Pandey</h2>
      <h2>CRAFTING WEB MAGIC|MERN STACK AFICIONADO</h2>
      <h2>EXPERTISE IN FULL STACK WEB DEVELOPMENT</h2>
      <h2>DATA DRIVEN DECISIONS WITH MONGODB</h2>
      <h2>LIGHNING FAST EXPRESSJS BACKEND</h2>
      <h2>PIXEL PERFECT REACT FRONTENDS</h2>
      <h2>SEAMLESS INTEGRATION WITH NODE JS</h2>
    </motion.div>
    </div>
    <div className='about-2'>
      <div className='about-21' data-aos="zoom-in"> 
        <h2>EDUCATIONAL</h2>
        <h2>BACKGROUND</h2>
      </div>
      <div className='about-22'> 
      <div className='about-221' data-aos='flip-left'>
      <h2>DPS BHILAI</h2>
      <h2>XII-2020-21</h2>
      <h2>X-2018-19</h2>
      <h2>"Completed My Entire Schooling from Nursery-12th At DPS BHILAI"</h2>
      </div>
      <div className='about-222' data-aos='flip-right'>
      <h2>VELLORE INSTITUTE OF TECHNOLOGY,VELLORE</h2>
      <h2>BTECH IN COMPUTER SCIENCE</h2>
      <h2>SPECIALISATION IN BLOCKCHAIN TECHNOLOGY</h2>
      <h2>2021-25</h2>
      <h2>"Pursuing Btech In CS With Specialisation In BlockChain Technolgy At VIT VELLORE"</h2>
      </div>
      </div>

    </div>
    <div className='about-3'>
    <div className='about-31'>
    <h2>PERSONAL</h2>
    <h2>SKILLS</h2>
    <p>
      A Passionate UI Designer Who Finds Creativity in Crafting Intutive User Interfaces.
  When Not Designing Or Developing,You Will Find Me on 2 Wheels,Exploring New Places On My Bike

    I Am Also A Fitness Enthusiast and Regular At Gym,always Striving For Personal Growth In And Out Of Design World!
    </p>
    </div>
    <div className='about-32'>
<img src={a3} alt='MY DESIGN'></img>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default About